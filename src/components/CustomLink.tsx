import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = React.PropsWithChildren<LinkProps> & {
  label?: string,
  children?: React.ReactNode
}

export const CustomLink: React.VFC<Props> = ({ href, label, children }) => { 
  const router = useRouter()
  const handleAriaCurrent = (label: string): boolean => {
    if (label === 'Home') {
      return router.asPath === '/'
    }
    return router.asPath.slice(1).startsWith(label.toLowerCase())
  }
  return (
    <Link href={href}>
      {label ? <a aria-current={handleAriaCurrent(label)}>{label}</a> : children}
    </Link>
  )
}