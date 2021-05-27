import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

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
    <Link href={href} passHref>
      {label ? <Anchor aria-current={handleAriaCurrent(label)}>{label}</Anchor> : children}
    </Link>
  )
}

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`