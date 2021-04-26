import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
  label?: string,
  children?: React.ReactNode
}

export const CustomLink: React.VFC<Props> = (props) => {
  const { href, label, children } = props
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