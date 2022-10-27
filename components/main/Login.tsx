/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link'

export default function Login(): JSX.Element {
  return (
    <form action="" className="m-auto max-w-[368px] px-6">
      <label htmlFor="name" className="font_yellow_underline_green text-2xl">
        ユーザー名
      </label>
      <input type="text" name="name" className="mb-[24px] block w-full border-[1px] text-2xl " />
      <label htmlFor="password" className="font_yellow_underline_green text-2xl">
        パスワード
      </label>
      <input type="text" name="password" className="mb-[24px] block w-full border-[1px] text-2xl" />
      <Link href="/auth">
        <a>
          <input type="submit" value="ログインする" className="bg-main p-[8px] text-lg text-accent" />
        </a>
      </Link>
    </form>
  )
}
