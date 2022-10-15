type Fetcher = (url: string) => Promise<any>

type Post = {
  id: number
  title: string
  linkPath: string | null
  imagePath: string | null
  published: boolean
  authorId: number
  createdAt: Date
  updatedAt: Date
}
