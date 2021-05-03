import Image from 'next/image'
import styled from 'styled-components'
import { Article } from '@/types';
import { calcReadingTime, convertDateToString } from '@/utils';
import { ClockIcon, PersonIcon } from './icons';
import { media } from '@/styles';

type Props = {
  article: Article
}

export const ArticleCard: React.VFC<Props> = (props) => {
  const { article } = props
  const publishedAt = convertDateToString(new Date(article.publishedAt));
  const readingTime = calcReadingTime(article.body.length)
  const defaultOgp = `https://og-image-co9xs.vercel.app/${encodeURI(article.title)}.png`
  const ogImage = article.ogimage ? article.ogimage.url : defaultOgp
  return (
    <ArticleBase>
      <ArticleImage>
        <Image src={ogImage} width={350} height={200} layout={'responsive'}/>
      </ArticleImage>
      <ArticleData>
        <ArticleTitle>{ article.title }</ArticleTitle>
        <ArticleCategory>{article.category.name}</ArticleCategory>
        <ArticleTags>
          {article.tags.map(tag => (
            <ArticleTag key={tag.id}>#{tag.name}</ArticleTag>
          ))}
        </ArticleTags>
        <ArticleMetaData>
          <ArticleDate>
            <ClockIcon />
            <ArticleDateText>
              {publishedAt}
            </ArticleDateText>
          </ArticleDate>
          <ArticleReadingTime>{readingTime} min read</ArticleReadingTime>
          <ArticleAuthor>
            <PersonIcon/>
            <ArticleAuthorText>{ article.author?.displayName}</ArticleAuthorText>
          </ArticleAuthor>
        </ArticleMetaData>
      </ArticleData>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  padding: 16px 0;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ${media.tablet` 
    flex-direction: column;
  `}
`

const ArticleImage = styled.div`
  min-width: 350px;
  height: 200px;

  ${media.tablet`
    min-width: 100%;
    height: auto;
  `}
`

const ArticleData = styled.div`
  min-width: 320px;
  max-width: 420px;
  margin-left: 24px;
  flex-shrink: 1;
  ${media.tablet`
    max-width: 100%;
    min-width: 100%;
    margin: 16px 0 0 0;
  `}
  ${media.phone`
    margin-top: 8px;
  `}
`

const ArticleTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  margin-bottom: 10px;
`

const ArticleCategory = styled.span`
  color: #60A5FA;
  padding: 4px 8px;
  border: 2px solid #60A5FA;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 14px;
  margin-right: 16px;
`

const ArticleTags = styled.div`
  color: #616269;
  margin-bottom: 10px;
  ${media.tablet`
    display: inline-block;
  `}
`

const ArticleTag = styled.span`
  margin-right: 8px;
`

const ArticleMetaData = styled.div`
  color: #616269;
  display: flex;
  align-items: center;
`

const ArticleDate = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  ${media.tablet`
    margin-right: 8px;
  `}
`

const ArticleDateText = styled.span`
  margin-left: 8px;
`

const ArticleReadingTime = styled.div`
  margin-right: 16px;
  ${media.tablet`
    margin-right: 8px;
  `}
`

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
`

const ArticleAuthorText = styled.span`
  margin-left: 8px;
`