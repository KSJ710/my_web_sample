import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const posts: Post[] = []

function createRandomPost(i: number, userId: string): Post {
  return {
    id: i,
    title: faker.random.words(5),
    linkPath: `posts/${i}`,
    imagePath: faker.image.animals(),
    published: faker.datatype.boolean(),
    authorId: userId,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export async function insertPosts(prisma: PrismaClient) {
  let users = await prisma.user.findMany({ where: { roleId: 1 } })

  Array.from({ length: 30 }).forEach((v: unknown, i: number) => {
    i++
    let user: User = users[Math.floor(Math.random() * users.length)]
    posts.push(createRandomPost(i, user.id))
  })

  await prisma.post.createMany({ data: posts })
}
