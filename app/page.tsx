'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page(): JSX.Element {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  })

  return <div>Loading...</div>
}
