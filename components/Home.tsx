import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.scss'

export default function Home(): JSX.Element {
  return (
    <div>
      <header className="text-center font-lusi text-[32px] leading-[48px] text-accent">My Web Sample</header>
      <div className="h-[48px] bg-main"></div>
      <form action="" className="mx-auto mt-[32px] w-2/3 max-w-xs">
        <label htmlFor="name" className={styles.label_yellow}>
          ユーザー名
        </label>
        <input type="text" name="name" className="mb-[24px] block w-full border-[1px] " />
        <label htmlFor="password" className={styles.label_yellow}>
          パスワード
        </label>
        <input type="text" name="password" className="mb-[24px] block w-full border-[1px]" />
        <input type="submit" value="ログインする" className=" bg-main p-[8px] text-accent" />
      </form>
    </div>
  )
}
