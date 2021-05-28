import styled from 'styled-components'
import { media } from '@/styles';
import { ZennIcon } from './icons/ZennIcon';
import { ExternalPostItem } from '@/types';

type Props = {
  post: ExternalPostItem
}

export const ExternalArticle: React.VFC<Props> = (props) => {
  const { post } = props
  return (
    <ArticleBase>
      <ArticleEyeCatch>
        <ZennIcon/>
      </ArticleEyeCatch>
      <ArticleData>
        <ArticleTitle>React17のevent delegationの破壊的変更を理解する</ArticleTitle>
        <ArticleMetaData>
          <ArticleDate>
            <ArticleDateText>2021/02/03</ArticleDateText>
          </ArticleDate>
        </ArticleMetaData>
      </ArticleData>
    </ArticleBase>
)
}

const ArticleBase = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-2);
  border-radius: var(--border-size-3);
  cursor: pointer;
  &:hover {
    background-color: var(--colors-navy);
    transition: background var(--animation-duration) var(--animation-timing);
  }
`
const ArticleEyeCatch = styled.div`
  width: 10%;
  text-align: center;
  font-size: var(--font-size-5);
  margin-right: var(--spacing-1);
  ${media.phone`
    display: none;
  `}
`

const ArticleData = styled.div`
`

const ArticleTitle = styled.h3`
  margin: 0 0 var(--spacing-2) 0;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-heading);
`

const ArticleMetaData = styled.div`
  color: var(--colors-gray);
  display: flex;
  align-items: center;
`

const ArticleDate = styled.span`
  margin-right: var(--spacing-2);
  display: flex;
  align-items: center;
  ${media.phone`
    display: none;
  `}
`

const ArticleDateText = styled.span`
  margin-left: var(--spacing-1);
`