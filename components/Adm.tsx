/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'
import { dummyImage, stringDateToYmd } from 'helpers/common'
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
        <time className="font_yellow_underline_green">{stringDateToYmd(post.updatedAt)}</time>
        <Image loader={dummyImage} src="me.png" alt="Picture of the author" width={500} height={500} />
        <h2 className="font_yellow_underline_green">{post.title}</h2>
        <div className="border_green"></div>
      </li>
    </article>
  ))
}
