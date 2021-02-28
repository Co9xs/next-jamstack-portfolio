import Link from 'next/link'

type Props = {
  href: string,
  label: string,
}

export const CustomLink: React.FC<Props> = ({ href, label }) => { 
  return (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  )
}