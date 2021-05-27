import styled from 'styled-components'
import { convertDateToString } from '@/utils';
import { ClockIcon } from './icons';
import { media } from '@/styles';
import { ArticleItem } from '@/apis/blog';

type Props = {
  article: ArticleItem
}

export const ArticleCard: React.VFC<Props> = (props) => {
  const { article } = props
  const publishedAt = convertDateToString(new Date(article.publishedAt));
  return (
    <ArticleBase>
      <ArticleEyeCatch>
        {article.emoji || "🐈"}
      </ArticleEyeCatch>
      <ArticleData>
        <ArticleTitle>{ article.title }</ArticleTitle>
        <ArticleMetaData>
          <ArticleCategory>{article.category.name}</ArticleCategory>
          <ArticleTags>
            {article.tags.map(tag => (
              <ArticleTag key={tag.id}>#{tag.name}</ArticleTag>
            ))}
          </ArticleTags>
          <ArticleDate>
            <ClockIcon fill="var(--colors-gray)"/>
            <ArticleDateText>
              {publishedAt}
            </ArticleDateText>
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

const ArticleCategory = styled.span`
  color: var(--colors-blue-green);
  padding: var(--spacing-1) var(--spacing-2);
  border: var(--border-size-2) solid var(--colors-blue-green);
  border-radius: var(--border-size-3);
  font-size: var(--font-size-min);
  margin-right: var(--spacing-3);
`

const ArticleTags = styled.div`
`

const ArticleTag = styled.span`
  margin-right: var(--spacing-2);
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