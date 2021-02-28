import { CustomLink } from '../components/CustomLink'
import styled from 'styled-components'
import Twemoji from 'react-twemoji';
import { ArticleList } from '../components/ArticleList'

export default function Blog({ articles }) {
  return (
    <ContentSection style={{background: '#F1F5F9'}}>
      <Heading2><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</Heading2>
      <ArticleList articles={articles}/>
    </ContentSection>
  )
}

export const getStaticProps = async ({ context }) => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://shima.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      articles: data.contents,
    },
  };
};

const Heading2 = styled.h2`
  margin: 1rem 0;
  padding: 0;
  span {
  text-align:center;
  display: inline-block;
  img {
    height: 28px;
    vertical-align: bottom;
    margin-right: .5rem;
  }
`

const ContentSection = styled.section`
  padding: 1rem 5rem;
`