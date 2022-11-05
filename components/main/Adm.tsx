/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { stringDateToYmd } from 'helpers/common'
import { useGetPosts } from 'helpers/custom_hooks/posts'
import { useGetCategories } from 'helpers/custom_hooks/categories'
import { useState } from 'react'

export default function Adm(): JSX.Element {
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="p-2">
      <Categories />
      <article>
        <div>
          <h1 className="font_yellow_underline_green mb-[16px]">記事一覧</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <Posts />
          </div>
        </div>
      </article>
    </div>
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
          src="/images/dummy.png"
          alt="Picture of the author"
          width={250}
          height={140}
          layout="responsive"
          className="py-1"
        />
        <h2 className="font_yellow_underline_green text-xl">{post.title}</h2>
      </li>
    </article>
  ))
}

function Categories(): JSX.Element {
  const { categories, isLoading, isError } = useGetCategories()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  const categoryList = categories.map((categories: CategoryJson) => (
    <span
      key={categories.id}
      className="inline-block border-2 border-solid border-main bg-accent px-2 py-1 text-xs text-white"
    >
      {replaceOverWordCount(categories.name)}
    </span>
  ))

  return <div className="mt-[-28px] mb-[24px] flex gap-2 overflow-scroll whitespace-nowrap">{categoryList}</div>
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
