import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Index(): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    router.push('/auth/adm')
  })

  return <div>Loading...</div>
}
