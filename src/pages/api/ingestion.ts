import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import pdfParse from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import { supabase as supabaseVectorStoreClient } from "@/lib/supa-base-client"; // For vector storage
import path from "path";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

// Helper to update progress
async function updateIngestionProgress(
  ingestionId: string,
  progress: number,
  status: string = "processing"
) {
  await supabase
    .from("ingestions")
    .update({ progress, status, updatedat: new Date().toISOString() })
    .eq("id", ingestionId);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { documentId, documentTitle, filePath } = req.body;

      if (!documentId || !documentTitle || !filePath) {
        return res.status(400).json({
          message: "documentId, documentTitle, and filePath are required",
        });
      }

      // Step 1: Start ingestion record
      const { data: ingestionData, error: ingestionError } = await supabase
        .from("ingestions")
        .upsert([
          {
            documentid: documentId,
            documenttitle: documentTitle,
            status: "processing",
            progress: 0,
            startedat: new Date().toISOString(),
          },
        ])
        .select();

      if (ingestionError) {
        console.error("Error creating ingestion record:", ingestionError);
        return res.status(500).json({ message: "Error creating ingestion" });
      }

      const ingestionId = ingestionData[0].id;

      // Step 2: Start processing PDF
      const finalfilePath = path.join(process.cwd(), "uploads", filePath);

      const fileData = fs.readFileSync(finalfilePath);
      const pdf = await pdfParse(fileData);
      const text = pdf.text;

      // Step 3: Split into chunks
      const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50,
      });
      const docs = await splitter.createDocuments([text]);

      // Update progress to 30%
      await updateIngestionProgress(ingestionId, 30, "completed");

      await supabase
        .from("uploads")
        .update({ isInjected: true })
        .eq("id", documentId);

      // Step 4: Create embeddings and upload to Supabase vector store
      const embeddings = new OpenAIEmbeddings();

      SupabaseVectorStore.fromDocuments(docs, embeddings, {
        client: supabaseVectorStoreClient,
        tableName: "documents", // your vector table
        queryName: "match_documents", // your matching function
      });

      // Step 5: Update progress to 100% and completed
      setTimeout(() => {
        updateIngestionProgress(ingestionId, 100, "completed");
      }, 5000);

      return res
        .status(200)
        .json({ message: "Ingestion and storage completed successfully!" });
    } catch (error) {
      console.error("Ingestion error:", error);
      return res.status(500).json({ message: "Server error during ingestion" });
    }
  }

  if (req.method === "GET") {
    try {
      const { id } = req.query; // You can pass an ingestion ID to fetch a specific record

      // If an ID is provided, fetch a specific ingestion record
      if (id) {
        const { data, error } = await supabase
          .from("ingestions")
          .select("*")
          .eq("id", id) // Filter by ID
          .single();

        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error fetching ingestion record" });
        }

        return res.status(200).json(data);
      }

      // If no ID is provided, fetch all ingestion records
      const { data, error } = await supabase.from("ingestions").select("*");

      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "Error fetching ingestion records" });
      }

      return res.status(200).json(data); // Return all ingestion records
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }
}
