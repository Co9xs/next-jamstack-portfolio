import styled from 'styled-components'
import { Article } from '@/types';
import { convertDateToString } from '@/utils';
import React from 'react';
import { ClockIcon, PersonIcon } from './icons';

type Props = {
  article: Article
}

export const ArticleCard: React.VFC<Props> = (props) => {
  const { article } = props
  const publishedAt = convertDateToString(new Date(article.publishedAt));
  console.log(article.body.length)
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
          <ArticleReadTime>30 min read</ArticleReadTime>
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

  //DarkMode
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.black};
  border-color: ${({ theme }) => theme.smoke};
`

const ArticleImage = styled.div`
  width: 350px;
  min-width: 250px;
  height: 175px;
  background-color: #EEE;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
`

const ArticleData = styled.div`
  min-width: 420px;
  max-width: 420px;
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
  color: ${({ theme }) => theme.smoke};
`

const ArticleDateText = styled.span`
  margin-left: 8px;
`

const ArticleReadTime = styled.div`
  margin-right: 16px;
`

const ArticleAuthor = styled.div`
  display: flex;
  align-items: center;
`

const ArticleAuthorText = styled.span`
  margin-left: 8px;
`