import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const tags: MTag[] = []

function createRandomTag(i: number, tagId: number): MTag {
  return {
    id: i,
    name: faker.random.word(),
    categoryId: tagId,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export async function insertTags(prisma: PrismaClient) {
  let tag_categories = await prisma.mTagCategory.findMany({})
  Array.from({ length: 30 }).forEach((v: unknown, i: number) => {
    i++
    let tagCategory: MTagCategory = tag_categories[Math.floor(Math.random() * tag_categories.length)]
    tags.push(createRandomTag(i, tagCategory.id))
  })
  await prisma.mTag.createMany({ data: tags })
}
