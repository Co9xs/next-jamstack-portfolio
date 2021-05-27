import Link, { LinkProps } from 'next/link'

type Props = LinkProps & {
  children?: React.ReactNode
}

export const CustomLink: React.VFC<Props> = (props) => {
  const { href, children } = props
  return (
    <Link href={href}>
      {children}
    </Link>
  )
}