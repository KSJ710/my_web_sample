/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { dummyImage, stringDateToYmd } from 'helpers/common'
import { useGetPosts } from 'helpers/custom_hooks/posts'
import { useGetCategories } from 'helpers/custom_hooks/categories'
import { useState } from 'react'

export default function Adm(): JSX.Element {
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <article className="max-w-[80%]">
      <h1 className="mb-[16px]">記事一覧</h1>
      <p>選択中タグ：</p>
      <hr className="my-[8px]" />
      <Posts />
    </article>
  )
}

function Posts() {
  const { posts, isLoading, isError } = useGetPosts()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return posts.map((post: PostJson) => (
    <article key={post.id} className="mb-[32px]">
      <li>
        <time className="font_yellow_underline_green mb-[16px] text-[14px]">{stringDateToYmd(post.updatedAt)}</time>
        <Image loader={dummyImage} src="me.png" alt="Picture of the author" width={500} height={500} />
        <h2 className="font_yellow_underline_green mb-[16px] text-[20px]">{post.title}</h2>
        <div className="border_green"></div>
      </li>
    </article>
  ))
}

function Categories() {
  const { categories, isLoading, isError } = useGetCategories()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return categories.map((categories: CategoryJson) => <span key={categories.id}>{categories.name}</span>)
}
