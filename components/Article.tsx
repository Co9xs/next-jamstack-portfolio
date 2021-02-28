import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Article = ({ article }) => { 
  const convertToDate = (dt: Date) => {
    const year = dt.getFullYear();
    const month = ("00" + (dt.getMonth()+1)).slice(-2);
    const date = ("00" + dt.getDate()).slice(-2);
    const result = `${year}/${month}/${date}`
    return result;
  }
  const publishedAt = convertToDate(new Date(article.publishedAt));
  return (
    <ArticleBase>
      <ArticleHeader>
        <ArticleTitle>{ article.title }</ArticleTitle>
      </ArticleHeader>
      <ArticleFooter>
        <ArticleDate><FontAwesomeIcon className="w-5 mr-2 mb-1 inline" icon={["fas", "coffee"]}/>{ publishedAt }</ArticleDate>
        {article.category && <ArticleCategory>#{ article.category.name }</ArticleCategory>}
      </ArticleFooter>
    </ArticleBase>
  )
}

const ArticleBase = styled.article`
  padding: 0.75rem;
  border: 1px solid #EFEFEF;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #f8f8ff;
  cursor: pointer;
`

const ArticleHeader = styled.div`
  display: flex;
`
const ArticleTitle = styled.h3`
  margin: 0;
  padding: 0;
`
const ArticleFooter = styled.div`
`
const ArticleCategory = styled.span`
  color: #60A5FA;
  margin-right: .5rem;
`
const ArticleDate = styled.span`
  color: #6B7280;
  margin-right: 1rem;
`