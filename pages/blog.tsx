import Twemoji from 'react-twemoji';
import { ArticleList } from '../components/ArticleList';
import { PageBase, ContentSection, ContentSectionInner, Heading2 } from '../styles/utils/styled';

export default function Blog({ articles }) {
  return (
    <PageBase>
      <ContentSection style={{ background: '#F1F5F9', minHeight: '100%'}}>
        <ContentSectionInner>
          <Heading2><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</Heading2>
          <ArticleList articles={articles}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
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