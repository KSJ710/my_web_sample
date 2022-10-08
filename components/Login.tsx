import Image from 'next/image'
import Link from 'next/link'
import styles from './Login.module.scss'

export default function Login(): JSX.Element {
  return (
    <form action="" className="mx-auto mt-[32px] w-2/3 max-w-[320px]">
      <label htmlFor="name" className={styles.label_yellow}>
        ユーザー名
      </label>
      <input type="text" name="name" className="mb-[24px] block w-full border-[1px] " />
      <label htmlFor="password" className={styles.label_yellow}>
        パスワード
      </label>
      <input type="text" name="password" className="mb-[24px] block w-full border-[1px]" />
      <Link href="/auth">
        <a>
          <input type="submit" value="ログインする" className=" bg-main p-[8px] text-accent" />
        </a>
      </Link>
    </form>
  )
}
