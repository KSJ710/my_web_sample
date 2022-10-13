/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { useGetPost } from 'helpers/custom_hooks/posts'

export default function Adm(): JSX.Element {
  return (
    <article className="m-auto max-w-[80%] p-[48px]">
      <h1>記事一覧</h1>
      <p>選択中タグ：</p>
      <hr />
      <Posts />
    </article>
  )
}

function Posts() {
  const { posts, isLoading, isError } = useGetPost()
  if (isError) return <div>error</div>
  if (isLoading) return <div>loading...</div>

  return posts.map((post: Post) => (
    <article key={post.id}>
      <li>
        <time>{post.updatedAt.toLocaleString()}</time>
        <h2>{post.title}</h2>
        <div className="border_green"></div>
      </li>
    </article>
  ))
}
