import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { CustomLink } from '@/components/CustomLink'
import styled from 'styled-components'

type Props = LinkProps & {
  label: string,
}

export const NavLink: React.VFC<Props> = (props) => {
  const { href, label } = props
  const router = useRouter()
  const handleAriaCurrent = (label: string): boolean => {
    if (label === 'Home') {
      return router.asPath === '/'
    }
    return router.asPath.slice(1).startsWith(label.toLowerCase())
  }
  return (
    <CustomLink href={href} passHref>
      <Anchor aria-current={handleAriaCurrent(label)}>{label}</Anchor>
    </CustomLink>
  )
}

const Anchor = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: var(--colors-gray);
  padding: var(--spacing-2) 0;
  &[aria-current="true"] {
    color: var(--colors-white);
  }
`