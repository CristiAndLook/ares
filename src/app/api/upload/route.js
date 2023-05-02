import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  writeFile(`./public/${file.name}`, buffer);

  return NextResponse.json({ success: true, message: "File uploaded" });
}
