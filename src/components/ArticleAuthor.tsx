import styled from 'styled-components'
import Image from 'next/image'
import { AuthorItem } from '@/apis/authors'
import { TwitterIcon } from './icons'

type Props = {
  author: AuthorItem
}

export const ArticleAuthor: React.VFC<Props> = ({ author }) => {
  return (
    <ArticleAuthorBase>
      <ArticleAuthorHeader>
        <ArticleAuthorHeading>この記事を書いた人</ArticleAuthorHeading>
      </ArticleAuthorHeader>
      <ArticleAuthorBody>
        {/* <ArticleAuthorImage>
          <Image src={author.image?.url} width={100} height={100} priority={true}/>
        </ArticleAuthorImage> */}
        <ArticleAuthorContent>
          <ArticleAuthorName>
            { author.displayName }
          </ArticleAuthorName>
          <ArticleAuthorDescription>{ author.description }</ArticleAuthorDescription>
        </ArticleAuthorContent>
      </ArticleAuthorBody>
    </ArticleAuthorBase>
  )
}

const ArticleAuthorBase = styled.div`
`
const ArticleAuthorHeader = styled.div`
  border-top: 2px solid #333;
  position: relative;
`

const ArticleAuthorHeading = styled.span`
  padding: 4px;
  background: #333;
  color: #FFF;
  font-size: 15px;
  position: absolute;
  top: 0;
  left: 8px;
`
const ArticleAuthorBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`

const ArticleAuthorImage = styled.div`
  width: 120px;
  height: 120px;
`

const ArticleAuthorContent = styled.div`
`

const ArticleAuthorName= styled.div`
  font-weight: bold;
`

const ArticleAuthorDescription = styled.div`
  margin-top: 8px;
`