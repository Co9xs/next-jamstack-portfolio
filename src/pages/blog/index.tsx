import { GetStaticProps, NextPage } from "next";
import Twemoji from 'react-twemoji';
import { Meta, ArticleList, Pagination, SideBarLayout } from '@/components';
import { Article } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles';
import { getArticles } from '@/lib';
import { ARTICLES_PER_PAGE } from '@/utils';

type Props = {
  articles: Article[],
  totalCount: number,
  layout: string
}

const Blog: NextPage<Props> = (props: Props) => {
  const { articles, totalCount, layout } = props
  const image = "https://og-image-co9xs.vercel.app/Ryo Fujishima - Web Dev.png"
  return (
    <SideBarLayout>
      <PageBase>
        <Meta
          title={'Blog'}
          description={'Ryo Fujishima - Web Dev'}
          image={encodeURI(image)}
        />
        <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
          <ContentSectionInner>
            <SectionTitle><Twemoji tag="span">🧑‍💻</Twemoji>記事一覧</SectionTitle>
            <ArticleList articles={articles} />
            <Pagination pageHref={'/blog/page/'} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={1}/>
          </ContentSectionInner>
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE});
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
      layout: 'SideBar'
    },
  };
};

export default Blog