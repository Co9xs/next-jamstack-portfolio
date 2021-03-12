import Link from 'next/link';
import styled from 'styled-components';
import { range } from '../utils';

type Props = {
  totalCount: number
  currentPage: number
  perPage?: number
}

// TODO: ページ数が多くなったときの省略処理を実装する
export const Pagination: React.FC<Props> = ({ totalCount, currentPage, perPage = 5 }) => {
  if (totalCount <= perPage) return null
  const maxPage = Math.ceil(totalCount / perPage)
  return (
    <PaginationList>
      {range(1, maxPage).map((number, index) => {
        const isCurrent = currentPage === number
        return (
          <PaginationItem key={index} data-current={isCurrent}>
            <Link href={`/blog/page/${number}`}>
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
  padding: 0;
  margin: 0;
`

const PaginationItem = styled.li`
  background: #E6F2FF;
  color: #3161B4;
  border-radius: 3px;
  text-align: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  +li {
    margin-left: 10px;
  }
  &[data-current="true"] {
    background: #2C5DB0;
  }

  //DarkMode
  background: ${({ theme }) => theme.black};
  &[data-current="true"] {
    background: ${({ theme }) => theme.yellow};
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

  //DarkMode
  color: ${({ theme }) => theme.white};
  &[data-current="true"] {
    color: ${({ theme }) => theme.black};
  }
`