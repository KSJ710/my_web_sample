import { PrismaClient } from '@prisma/client'
import role from './seed_data/role'
import members from './seed_data/members'
import posts from './seed_data/posts'
import tags from './seed_data/tags'
import tagCategories from './seed_data/tag_categories'
import users from './seed_data/users'

const prisma = new PrismaClient()

async function main() {
  await prisma.mRole.createMany({ data: role })
  await prisma.member.createMany({ data: members })
  await prisma.mTagCategory.createMany({ data: tagCategories })
  await prisma.mTag.createMany({ data: tags })
  await prisma.post.createMany({ data: posts })
  await prisma.user.createMany({ data: users })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
