import { writeFile } from "fs/promises";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  writeFile(`./public/${file.name}`, buffer);

  return new Response(
    JSON.stringify({ message: "File uploaded successfully" })
  );
}
