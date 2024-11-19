import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('seed starting...');

  const users = Array.from({ length: 1_000_000 }, (_, i) => ({
    firstName: `name${i}`,
    lastName: `last${i}`,
    age: Math.floor(Math.random() * 60) + 18,
    gender: Math.random() > 0.5 ? 'male' : 'female',
    hasIssues: Math.random() > 0.8,
  }));

  const partSize = 1000;
  for (let i = 0; i < users.length; i += partSize) {
    const part = users.slice(i, i + partSize);
    await prisma.user.createMany({ data: part });
    console.log(`added ${i + part.length} users`);
  }
  console.log('completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });