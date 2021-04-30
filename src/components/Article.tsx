import styled from 'styled-components'
import { Article } from '@/types';
import { calcReadingTime, convertDateToString } from '@/utils';
import React from 'react';
import { ClockIcon, PersonIcon } from './icons';
import { media } from '@/styles';

type Props = {
  article: Article
}

export const ArticleCard: React.VFC<Props> = (props) => {
  const { article } = props
  const publishedAt = convertDateToString(new Date(article.publishedAt));
  const readingTime = calcReadingTime(article.body.length)
  return (
    <ArticleBase>
      <ArticleImage>
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
  justify-content: space-between;

  ${media.tablet`
    flex-direction: column;
  `}
  

  //DarkMode
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.black};
  border-color: ${({ theme }) => theme.smoke};
`

const ArticleImage = styled.div`
  max-width: 350px;
  min-width: 250px;
  height: 175px;
  flex-grow: 1;
  background-color: #EEE;
  border-radius: 3px;
  background-size: cover;
  background-position: center;

  ${media.tablet`
    max-width: 100%;
    min-width: 100%;
    height: 230px;
    margin-bottom: 16px; 
  `}
`

const ArticleData = styled.div`
  min-width: 320px;
  max-width: 420px;
  margin-left: 16px;
  flex-grow: 1;
  ${media.tablet`
    max-width: 100%;
    min-width: 100%;
    margin: 0;
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
`

const ArticleTags = styled.div`
  color: #616269;
  margin-bottom: 10px;
  ${media.tablet`
    display: inline-block;
    margin-left: 16px;
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