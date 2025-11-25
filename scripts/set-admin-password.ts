import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const username = "veloz";
  const plainPassword = "veloz123";

  const hash = await bcrypt.hash(plainPassword, 10);
  console.log("Generated hash:", hash);

  const updated = await prisma.admin.update({
    where: { username },
    data: { password: hash },
  });

  console.log("Admin updated:", updated);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });