import { faker } from '@faker-js/faker'
faker.locale = 'ja'

type User = {
  id: string
  roleId: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const users: User[] = []

function createRandomUser(i: number): User {
  return {
    id: `${i}`,
    roleId: Math.ceil(Math.random() * 2),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    createdAt: faker.date.past(10, new Date()),
    updatedAt: faker.date.past(10, new Date())
  }
}

Array.from({ length: 10 }).forEach((v: unknown, i: number) => {
  i++
  users.push(createRandomUser(i))
})

export default users
