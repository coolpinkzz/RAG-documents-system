// src/pages/api/get-documents.ts
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Fetch documents list from Supabase
      const { data, error } = await supabase.from("uploads").select();

      if (error) throw error;

      res.status(200).json({ documents: data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching documents" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
