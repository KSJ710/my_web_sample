/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { dummyImage, stringDateToYmd } from 'helpers/common'
import { useGetPosts } from 'helpers/custom_hooks/posts'
import { useGetCategories } from 'helpers/custom_hooks/categories'
import { useState } from 'react'

export default function Adm(): JSX.Element {
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <article className="py-2 px-4">
      <Categories />
      <div>
        <h1 className="mb-[16px]">記事一覧</h1>
        <p>選択中タグ：</p>
        <hr className="my-[8px]" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Posts />
        </div>
      </div>
    </article>
  )
}

function Posts(): JSX.Element {
  const { posts, isLoading, isError } = useGetPosts()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return posts.map((post: PostJson) => (
    <article key={post.id} className="">
      <li>
        <time className="font_yellow_underline_green mb-[8px] text-sm">{stringDateToYmd(post.updatedAt)}</time>
        <Image
          loader={dummyImage}
          src="me.png"
          alt="Picture of the author"
          width={250}
          height={140}
          layout="responsive"
        />
        <h2 className="font_yellow_underline_green mb-[16px] text-xl">{post.title}</h2>
        <div className="border_green"></div>
      </li>
    </article>
  ))
}

function Categories(): JSX.Element {
  const { categories, isLoading, isError } = useGetCategories()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  const categoryList = categories.map((categories: CategoryJson) => (
    <span key={categories.id} className="inline-block rounded-full bg-subaccent p-1 text-xs text-white">
      {replaceOverWordCount(categories.name)}
    </span>
  ))

  return <div className="flex flex-wrap gap-4">{categoryList}</div>
}

function replaceOverWordCount(text: string): string {
  const wordCount: number = text.length
  const wordLimit: number = 16

  if (wordCount >= wordLimit) {
    let targetWord = text.slice(wordLimit, wordCount + 1)
    return text.replace(targetWord, '...')
  }
  return text
}
