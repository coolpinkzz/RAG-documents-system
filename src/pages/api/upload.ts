import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { parseForm } from "@/lib/parseForm"; // the helper you created above
import formidable from "formidable";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method allowed" });
  }

  try {
    const { fields, files } = await parseForm(req);

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const description = Array.isArray(fields.description)
      ? fields.description[0]
      : fields.description;

    const file = files.file as any;

    const fileType = file[0].mimetype?.split("/")[1];

    const fileSize = file[0].size;

    if (!file || !title || !description) {
      return res
        .status(400)
        .json({ message: "File, title, and description are required" });
    }

    const finalUploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(finalUploadDir)) {
      fs.mkdirSync(finalUploadDir, { recursive: true });
    }

    const oldPath = Array.isArray(file) ? file[0].filepath : file.filepath;
    const originalName = Array.isArray(file)
      ? file[0].originalFilename
      : file.originalFilename;

    if (!oldPath) {
      return res.status(400).json({ message: "Filepath is missing" });
    }

    const newFilePath = path.join(
      finalUploadDir,
      originalName || "uploaded-file.pdf"
    );

    fs.renameSync(oldPath, newFilePath);

    const { data, error } = await supabase
      .from("uploads")
      .insert([
        {
          title: title as unknown as string,
          description: description as unknown as string,
          file: originalName,
          fileType,
          fileSize,
        },
      ])
      .single();

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Error storing data in Supabase" });
    }

    return res
      .status(200)
      .json({ message: "File uploaded and metadata stored successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
