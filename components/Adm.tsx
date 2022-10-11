/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image'

export default function Adm(): JSX.Element {
  return (
    <article className="m-auto max-w-[80%] p-[48px]">
      <h1>記事一覧</h1>
      <p>選択中タグ：</p>
      <hr />
      <article>
        <time className="label_yellow">2022</time>
        <h2 className="label_yellow">タイトル</h2>
        <div className="border_green"></div>
      </article>
    </article>
  )
}
