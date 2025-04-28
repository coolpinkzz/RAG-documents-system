// pages/api/ask.ts
import { NextApiRequest, NextApiResponse } from "next";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { supabase } from "@/lib/supa-base-client";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { question } = req.body;

  const embeddings = new OpenAIEmbeddings();

  const vectorStore = new SupabaseVectorStore(embeddings, {
    client: supabase,
    tableName: "documents",
    queryName: "match_documents",
  });

  const relevantDocs = await vectorStore.similaritySearch(question, 4);
  const context = relevantDocs.map((doc) => doc.pageContent).join("\n");

  const openai = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0, // optional, makes it deterministic
  });

  const prompt = `Use the following context to answer:\n\n${context}\n\nQuestion: ${question}`;

  const response = await openai.call([
    new SystemMessage("You are a helpful assistant."),
    new HumanMessage(prompt),
  ]);

  return res.status(200).json({ answer: response });
}
