import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const tags: MTagCategory[] = []

function createRandomUser(i: number): MTagCategory {
  return {
    id: i,
    name: faker.random.word(),
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export async function insertTagCategories(prisma: PrismaClient) {
  Array.from({ length: 10 }).forEach((v: unknown, i: number) => {
    i++
    tags.push(createRandomUser(i))
  })
  await prisma.mTagCategory.createMany({ data: tags })
}
