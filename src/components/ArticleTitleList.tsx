import styled from 'styled-components'
import { CustomLink } from '@/components'
import { ArticleItem } from '@/apis/blog'

type Props = {
  articles: ArticleItem[]
}

export const ArticleTitleList: React.VFC<Props> = (props) => {
  const { articles } = props
  return (
    <ArticleListBase>
    {articles.map(article => (
      <CustomLink href={`/blog/${article.id}`} key={article.id}>
        <ArticleListItem key={article.id}>
          {article.title}
        </ArticleListItem>
      </CustomLink>
    ))}
    </ArticleListBase>
  )
}

const ArticleListBase = styled.ul`
  margin: 0;
  padding: 0;
  color: var(--colors-white);
  list-style: none;
`

const ArticleListItem = styled.li`
  cursor: pointer;
  padding: var(--spacing-2) 0;
  font-size: var(--font-size-1);
  & + li {
    border-top: var(--border-size-1) solid var(--colors-dark-gray);
  }
`