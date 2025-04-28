import formidable, { File } from "formidable";
import { IncomingMessage } from "http";
import path from "path";

export function parseForm(
  req: IncomingMessage
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({
    multiples: false,
    keepExtensions: true,
    uploadDir: path.join(process.cwd(), "uploads"),
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}
