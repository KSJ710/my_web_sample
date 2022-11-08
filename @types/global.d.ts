type User = {
  id: string
  roleId: number
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

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

type Category = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}
