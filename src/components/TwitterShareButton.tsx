import styled from 'styled-components'
import { TwitterIcon } from '@/components'

type Props = {
  articleId: string
}

export const TwitterShareButton: React.VFC<Props> = (props) => {
  const { articleId } = props
  return (
    <ShareButtonBase
      href={`https://twitter.com/share?url=https://fujishima.dev/${articleId}`}
      rel="nofollow" 
      target="_blank"
    >
      <TwitterIcon fill="#55ACEE"/>
    </ShareButtonBase>
  )
}

const ShareButtonBase = styled.a`
  height: 100%;
`