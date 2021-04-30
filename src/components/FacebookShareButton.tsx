import styled from 'styled-components'
import { FacebookIcon } from '@/components'

type Props = {
  articleId: string
}

export const FacebookShareButton: React.VFC<Props> = (props) => {
  const { articleId } = props
  return (
    <ShareButtonBase
      href={`https://www.facebook.com/sharer/sharer.php?u=https://fujishima.dev/${articleId}`}
      rel="nofollow" 
      target="_blank"
    >
      <FacebookIcon/>
    </ShareButtonBase>
  )
}

const ShareButtonBase = styled.a`
  height: 100%;
`