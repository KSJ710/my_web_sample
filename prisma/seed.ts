import { prisma } from 'lib/prisma_batch'
import insertRoles from './seed_data/role'
import insertMembers from './seed_data/members'
import insertTagCategories from './seed_data/tag_categories'
import insertTags from './seed_data/tags'
import insertUsers from './seed_data/users'
import insertPosts from './seed_data/posts'

async function main() {
  await insertRoles(prisma).then(() => {
    insertUsers(prisma).then(() => {
      insertPosts(prisma)
    })
  })
  insertMembers(prisma)
  insertTagCategories(prisma).then(() => {
    insertTags(prisma)
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
