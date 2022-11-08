import { faker } from '@faker-js/faker'
faker.locale = 'ja'

type Post = {
  id: number
  title: string
  linkPath: string
  imagePath: string | null
  published: boolean
  authorId: string
  createdAt: Date
  updatedAt: Date
}

const posts: Post[] = []

function createRandomPost(i: number): Post {
  return {
    id: i,
    title: faker.random.words(5),
    linkPath: `posts/${i}`,
    imagePath: faker.image.animals(),
    published: faker.datatype.boolean(),
    authorId: `${Math.ceil(Math.random() * 10)}`,
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

Array.from({ length: 30 }).forEach((v: unknown, i: number) => {
  i++
  posts.push(createRandomPost(i))
})

export default posts
