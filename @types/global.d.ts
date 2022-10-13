type Fetcher = (url: string) => Promise<any>

type Post = {
  id: number
  title: string
  linkPath: string
  imagePath: string
  published: boolean
  authId: number
  createdAt: Date
  updatedAt: Date
}
