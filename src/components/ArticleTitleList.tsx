import styled from 'styled-components'
import { CustomLink } from '@/components'
import { Article } from '@/types'

type Props = {
  articles: Article[]
}

export const ArticleTitleList: React.VFC<Props> = (props) => {
  const { articles } = props
  return (
    <ArticleListBase>
      <ArticleListHeading>人気記事</ArticleListHeading>
      <ArticleListItems>
      {articles.map(article => (
        <CustomLink href={`/blog/${article.id}`} key={article.id}>
          <ArticleListItem key={article.id}>
            {article.title}
          </ArticleListItem>
        </CustomLink>
      ))}
      </ArticleListItems>
    </ArticleListBase>
  )
}

const ArticleListBase = styled.div`
  margin: 0;
  padding: 0;
`

const ArticleListHeading = styled.h4`
  padding: 0;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
`

const ArticleListItems = styled.ul`
  margin: 0;
  padding: 0;
`

const ArticleListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 8px 0;
  border-bottom: 1px solid #EFEFEF;
  font-size: 18px;
`