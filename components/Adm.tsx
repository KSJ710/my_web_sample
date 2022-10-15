/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { stringDateToYmd } from 'helpers/common'
import { useGetPost } from 'helpers/custom_hooks/posts'

export default function Adm(): JSX.Element {
  return (
    <article className="m-auto max-w-[80%] pt-[48px]">
      <h1>記事一覧</h1>
      <p>選択中タグ：</p>
      <hr className="my-[10px]" />
      <Posts />
    </article>
  )
}

function Posts() {
  const { posts, isLoading, isError } = useGetPost()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return posts.map((post: any) => (
    <article key={post.id}>
      <li>
        <time>{stringDateToYmd(post.updatedAt)}</time>
        <h2>{post.title}</h2>
        <div className="border_green"></div>
      </li>
    </article>
  ))
}
