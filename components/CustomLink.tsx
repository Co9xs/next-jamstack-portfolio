import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  href: string,
  label?: string,
  children?: any,
}

export const CustomLink: React.FC<Props> = ({ href, label, children }) => { 
  const router = useRouter()

  return (
    <Link href={href}>
      {label ? <a aria-current={ router.pathname === href ? 'page' : null}>{label}</a> : children}
    </Link>
  )
}