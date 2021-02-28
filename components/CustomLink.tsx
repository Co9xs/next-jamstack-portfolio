import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  href: string,
  label: string,
}

export const CustomLink: React.FC<Props> = ({ href, label }) => { 
  const router = useRouter()

  return (
    <Link href={href}>
      <a aria-current={ router.pathname === href ? 'page' : null}>{label}</a>
    </Link>
  )
}