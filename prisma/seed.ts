import { prisma } from 'lib/prisma_batch'
import { insertRoles } from './seed_data/role'
import { insertUsers } from './seed_data/users'
import { insertPosts } from './seed_data/posts'
import { insertTagCategories } from './seed_data/tag_categories'
import { insertTags } from './seed_data/tags'
import { insertPostBelongToTags } from './seed_data/post_belong_to_tags'
import { insertMembers } from './seed_data/members'

async function main() {
  Promise.all([
    await insertRoles(prisma),
    await insertUsers(prisma),
    await insertPosts(prisma),
    await insertTagCategories(prisma),
    await insertTags(prisma)
  ]).then(() => {
    insertPostBelongToTags(prisma)
  })

  await insertMembers(prisma)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
