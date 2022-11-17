import { PrismaClient } from '@prisma/client'

const mTags = [
  { name: 'Javascript', categoryId: 1 },
  { name: 'Ruby', categoryId: 1 },
  { name: 'Python', categoryId: 1 }
]

export default async function insertTags(prisma: PrismaClient) {
  await prisma.mTag.createMany({ data: mTags })
}
