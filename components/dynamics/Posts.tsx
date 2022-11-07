/* eslint-disable tailwindcss/no-custom-classname */
import { prisma } from 'lib/prisma'
import Image from 'next/image'
import dummy from 'public/images/dummy.png'

export default async function Posts(): Promise<any> {
  const posts: Post[] = await getPosts()

  const post_list = posts.map((post: Post) => (
    <article key={post.id} className="">
      <time className="font_yellow_underline_green text-md mb-[8px]">{dateToYmd(post.updatedAt)}</time>
      <Image src={dummy} alt="Picture of the author" className="py-1" />
      <h2 className="font_yellow_underline_green text-xl">{post.title}</h2>
    </article>
  ))

  return (
    <article>
      <div>
        <h1 className="font_yellow_underline_green mb-[16px]">記事一覧</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">{post_list}</div>
      </div>
    </article>
  )
}

async function getPosts() {
  return await prisma.post.findMany({})
}

// stringDate→yyyy/mm/dd
export function dateToYmd(date: Date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return ` ${year} / ${month} / ${day}`
}
