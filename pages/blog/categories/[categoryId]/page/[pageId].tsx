import Twemoji from 'react-twemoji';
import { GetStaticProps } from 'next';
import { Meta } from '../../../../../components/common/Meta';
import { ArticleList } from '../../../../../components/ArticleList';
import { Pagination } from '../../../../../components/Pagination';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../../../../../styles/utils/common';
import { getArticles, getCategories, getCategory } from "../../../../../lib"
import { Article } from '../../../../../types';
import { ARTICLES_PER_PAGE, range } from '../../../../../utils';
import { Category } from '../../../../../types';

type Props = {
  category: Category,
  articles: Article[]
  totalCount: number
  currentPage: number
}

export default function CategoryPageId({ category, articles, totalCount, currentPage }: Props) {
  const image = `https://og-image-co9xs.vercel.app/${category.name}カテゴリの記事一覧.png`
  return (
    <PageBase>
      <Meta
        title={`${category.name}カテゴリの記事一覧`}
        description={`${category.name}カテゴリの記事一覧`}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🐱</Twemoji>{ category.name }カテゴリの記事一覧</SectionTitle>
          <ArticleList articles={articles} />
          <Pagination pageHref={`/blog/categories/${category.id}/page/`} totalCount={totalCount} perPage={ARTICLES_PER_PAGE} currentPage={currentPage}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticPaths = async (context) => {
  const data: {
    contents: Category[],
    totalCount: number
  } = await getCategories()
  const categories = data.contents;
  const paths = [];
  await Promise.all(categories.map(async (category) => {
    const data: {
      contents: Article[],
      totalCount: number
    } = await getArticles({ offset: 0, limit: ARTICLES_PER_PAGE, category })
    range(1, Math.ceil(data.totalCount / ARTICLES_PER_PAGE)).forEach(repo =>
      paths.push({
        params: {
          categoryId: category.id,
          pageId: repo.toString()
        }
      })
    )
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const categoryId = context.params?.categoryId as string;
  const pageId = context.params?.pageId as string;
  const category = await getCategory(categoryId)
  const offset = (Number(pageId) - 1) * ARTICLES_PER_PAGE;
  const data: {
    contents: Article[]
    totalCount: number
  } = await getArticles({ offset, limit: ARTICLES_PER_PAGE, category})
  return {
    props: {
      category,
      articles: data.contents,
      totalCount: data.totalCount,
      currentPage: Number(pageId),
    },
  }
}