import Link from 'next/link';
import styled from 'styled-components';
import { range } from '@/utils';

type Props = {
  pageHref: string
  totalCount: number
  currentPage: number
  perPage?: number
}

export const Pagination: React.VFC<Props> = ({ pageHref, totalCount, currentPage, perPage = 5 }) => {
  if (totalCount <= perPage) return null
  const maxPage = Math.ceil(totalCount / perPage)
  return (
    <PaginationList>
      {range(1, maxPage).map((number, index) => {
        const isCurrent = currentPage === number
        return (
          <PaginationItem key={index} data-current={isCurrent}>
            <Link href={`${pageHref}${number}`}>
              <PaginationLink data-current={isCurrent}>
                {number}
              </PaginationLink>
            </Link>
          </PaginationItem>
        )
      })}
    </PaginationList>
  )
}

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
`

const PaginationItem = styled.li`
  background: #E6F2FF;
  color: #3161B4;
  border-radius: 3px;
  text-align: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  margin: 10px;
  &[data-current="true"] {
    background: #2C5DB0;
  }
`

const PaginationLink = styled.a`
  user-select: none;
  text-decoration: none!important;
  display: block;
  height: 100%;
  color: #2C5DB0;
  line-height: 40px;
  cursor: pointer;
  &[data-current="true"] {
    font-weight: bold;
    color: #FFFFFF;
  }
`