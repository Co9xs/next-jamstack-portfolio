import { CategoryItem } from '@/apis/categories'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  category: CategoryItem
}

export const Breadcrumb: React.VFC<Props> = (props) => {
  const {category} = props
  return (
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link href="/blog/page/1">
          <a>Articles</a>
        </Link>
      </BreadcrumbItem>
      <BreadcrumbDivider>
        {'>'}
      </BreadcrumbDivider>
      <BreadcrumbItem>
        <Link href={`/blog/categories/${category.id}/page/1`}>
          <a>{ category.name }</a>
        </Link>
      </BreadcrumbItem>
    </BreadcrumbList>
  )
}

const BreadcrumbList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const BreadcrumbItem = styled.li`
  list-style: none;
  font-size: 16px;
  & > a {
    color: #60A5FA;
    text-decoration: none;
  }
`

const BreadcrumbDivider = styled.li`
  list-style: none;
  margin: 0 8px;
`
