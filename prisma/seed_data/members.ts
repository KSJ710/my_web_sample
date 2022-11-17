import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const members: Member[] = []

function createRandomUser(i: number): Member {
  return {
    id: i,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    rememberToken: null,
    rememberExpiresAt: null,
    confirmToken: null,
    confirmExpiresAt: null,
    confirmStatus: '',
    image: null,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export default async function insertMembers(prisma: PrismaClient) {
  Array.from({ length: 10 }).forEach((v: unknown, i: number) => {
    members.push(createRandomUser(i))
  })
  await prisma.member.createMany({ data: members })
}
