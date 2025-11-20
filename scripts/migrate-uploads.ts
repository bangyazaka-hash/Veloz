import { put } from "@vercel/blob";
import prisma from "../src/lib/prisma";
import fs from "fs";
import path from "path";

(async () => {
  const uploadDir = path.join(process.cwd(), "public/uploads");
  const files = fs.readdirSync(uploadDir);

  for (const file of files) {
    const filePath = path.join(uploadDir, file);

    if (!fs.statSync(filePath).isFile()) continue;

    console.log(`Uploading: ${file}`);

    const blob = await put(file, fs.readFileSync(filePath), {
      access: "public",
    });

    await prisma.component.updateMany({ where: { gambar: { contains: file.replace(/\s+/g, "_") } }, data: { gambar: blob.url } });
    await prisma.frame.updateMany({ where: { gambar: { contains: file.replace(/\s+/g, "_") } }, data: { gambar: blob.url } });
    await prisma.wheel.updateMany({ where: { gambar: { contains: file.replace(/\s+/g, "_") } }, data: { gambar: blob.url } });

    console.log(`Uploaded & Updated DB => ${blob.url}`);
  }

  console.log("Done migrate!");
  process.exit();
})();