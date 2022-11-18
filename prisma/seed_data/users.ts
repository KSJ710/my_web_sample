import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const users: User[] = []

function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    roleId: Math.ceil(Math.random() * 2),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    emailVerified: null,
    image: null,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export async function insertUsers(prisma: PrismaClient) {
  Array.from({ length: 10 }).forEach(() => {
    users.push(createRandomUser())
  })
  await prisma.user.createMany({ data: users })
}
