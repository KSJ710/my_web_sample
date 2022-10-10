import { PrismaClient } from '@prisma/client'
import role from './seed_data/role'
import members from './seed_data/members'
import tags from './seed_data/tags'
import users from './seed_data/users'

const prisma = new PrismaClient()

async function main() {
  await prisma.mRole.createMany({ data: role })
  await prisma.member.createMany({ data: members })
  await prisma.mTag.createMany({ data: tags })
  await prisma.user.createMany({ data: users })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
