import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
faker.locale = 'ja'

const postBelongToTags: PostBelongToTag[] = []

function createRandomPostBelongToTag(i: number, tagId: number): PostBelongToTag {
  return {
    id: i,
    postId: i,
    tagId: tagId,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

export async function insertPostBelongToTags(prisma: PrismaClient) {
  let posts = await prisma.post.findMany({})
  let tags = await prisma.mTag.findMany({})
  console.log('------------------------------------------')
  console.log(posts)

  posts.forEach((v: unknown, i: number) => {
    i++
    let tag: MTag = tags[Math.floor(Math.random() * tags.length)]
    postBelongToTags.push(createRandomPostBelongToTag(i, tag.id))
  })

  await prisma.postBelongToTag.createMany({ data: postBelongToTags })
}
