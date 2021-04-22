import Image from 'next/image'

type Props = {
  src: string
}

export const Logo: React.VFC<Props> = (props) => {
  const { src } = props;
  return (
      <Image
        src={src}
        alt="Logo"
        width={150}
        height={150}
      />
  )
}