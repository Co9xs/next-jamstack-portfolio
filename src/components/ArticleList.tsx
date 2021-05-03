import styled from 'styled-components'
import { ArticleCard } from '@/components'
import { Article } from '@/types'
import Link from 'next/link'

type Props = {
  articles: Article[]
}

export const ArticleList: React.VFC<Props> = ({ articles }) => {
  return (
    <ArticleListBase>
      {articles.map(article => (
        <Link href={`/blog/${article.id}`} key={ article.id }>
          <ArticleListItem key={article.id}>
            <ArticleCard article={ article }/>
          </ArticleListItem>
        </Link>
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

