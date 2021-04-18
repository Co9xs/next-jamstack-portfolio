import styled from 'styled-components'
import { Article } from './Article'
import { CustomLink } from './CustomLink'

type Props = {
  articles: any[]
}

export const ArticleList: React.VFC<Props> = ({ articles }) => {
  return (
    <ArticleListBase>
      {articles.map(article => (
          <CustomLink href={`/blog/${article.id}`} key={ article.id }>
            <ArticleListItem>
              <Article article={ article }/>
            </ArticleListItem>
          </CustomLink>
      ))}
    </ArticleListBase>
  )
}

const ArticleListBase = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const ArticleListItem = styled.li`
  margin-bottom: .5rem;
`
const ArticleListLink = styled.ul`
`

