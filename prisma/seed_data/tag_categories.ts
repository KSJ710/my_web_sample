import { PrismaClient } from '@prisma/client'

const mTagCategories = [
  { name: 'プログラミング言語' },
  { name: 'デザイン' },
  { name: 'ミドルウェア' },
  { name: '制作手法' },
  { name: '形式' },
  { name: 'フレームワーク' },
  { name: 'その他' }
]

export default async function insertTagCategories(prisma: PrismaClient) {
  await prisma.mTagCategory.createMany({ data: mTagCategories })
}
