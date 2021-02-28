import { CustomLink } from '../components/CustomLink'
import styled from 'styled-components'
import Twemoji from 'react-twemoji';

export default function Blog({ blog }) {
  return (
    <div>
      <ContentSection>
        <Heading2><Twemoji tag="span">🧑‍💻</Twemoji>技術記事一覧</Heading2>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <CustomLink href={`/blog/${blog.id}`} label={blog.title} />
            </li>
          ))}
        </ul>
      </ContentSection>
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://shima.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
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