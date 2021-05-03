import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { Breadcrumb, ClockIcon, Meta, PersonIcon, SideBarLayout, SnsShareButtonList } from '@/components';
import { PageBase, ContentSection, media } from '@/styles';
import { getArticle, getArticles, getCategories, getPopularArticles } from '@/lib';
import { ArticleItem } from '@/apis/blog';
import { CategoryItem } from '@/apis/categories';
import { convertDateToString } from '@/utils';
import 'highlight.js/styles/night-owl.css';

type Props = {
  article: ArticleItem,
  highlightedBody: string,
  categories: CategoryItem[],
  popularArticles: ArticleItem[]
}

type Params = {
  articleId: string
}

const articleId: NextPage<Props> = (props: Props) => {
  const { article, highlightedBody, categories, popularArticles } = props;
  const publishedAt = convertDateToString(new Date(article.publishedAt));
  const defaultOgp = `https://og-image-co9xs.vercel.app/${encodeURI(article.title)}.png`
  const ogImage = article.ogimage ? article.ogimage.url : defaultOgp
  return (
    <SideBarLayout categories={categories} popularArticles={popularArticles}>
      <PageBase>
        <Meta
          title={article.title}
          image={ogImage}
        />
        <ContentSection>
          <Image src={ogImage} width={820} height={450} layout={"responsive"} />
          <DetailPageBreadcrumb>
            <Breadcrumb category={article.category}/>
          </DetailPageBreadcrumb>
          <DetailPageArticle>
          <DetailPageSnsShare>
            <SnsShareButtonList articleId={article.id}/>
          </DetailPageSnsShare>
          <DetailPageContent>
          <DetailPageHeader>
            <DetailPageHeading>{article.title}</DetailPageHeading>
            <Link href={`/blog/categories/${article.category.id}/page/1`}>
              <DetailPageCategory>{article.category.name}</DetailPageCategory>
            </Link>
            <DetailPageTags>
              {article.tags.map(tag => (
                <DetailPageTag key={tag.id}>#{tag.name}</DetailPageTag>
              ))}
            </DetailPageTags>
            <DetailPageMetaData>
              <DetailPageDate>
                <ClockIcon />
                <DetailPageDateText>
                  {publishedAt}
                </DetailPageDateText>
              </DetailPageDate>
              <DetailPageReadingTime>15 min read</DetailPageReadingTime>
              <DetailPageAuthor>
                <PersonIcon/>
                <DetailPageAuthorText>{ article.author?.displayName}</DetailPageAuthorText>
              </DetailPageAuthor>
            </DetailPageMetaData>
          </DetailPageHeader>
          <DetailPageBody
            dangerouslySetInnerHTML={{
              __html: `${highlightedBody}`,
            }}
              />
          </DetailPageContent>
          </DetailPageArticle>
        </ContentSection>
      </PageBase>
    </SideBarLayout>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articleList = await getArticles();
  const paths = articleList.contents.map(article => `/blog/${article.id}`);
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { articleId } = context.params
  const article = await getArticle(articleId);
  const categoryList = await getCategories()
  const popularArticleObject = await getPopularArticles()

  // cheerioとhighlight.jsで事前にハイライトを適用
  const $ = cheerio.load(article.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return {
    props: {
      article,
      highlightedBody: $.html(),
      categories: categoryList.contents,
      popularArticles: popularArticleObject.contents
    },
  };
};

export default articleId

const DetailPageArticle = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet`
    display: block;
  `}
`

const DetailPageBreadcrumb = styled.div`
  margin: 16px 0 0 0;
  ${media.phone`
    margin: 8px 0 0 0;
  `}
`

const DetailPageSnsShare = styled.div`
  margin: 32px;
  & > ul {
    position: sticky;
    top: 152px;
  }
  ${media.tablet`
    display: none;
  `}
`

const DetailPageContent = styled.div`
  margin-left: auto;
`

const DetailPageHeader = styled.div`
  border-bottom: solid 1px #E4EDF4;
`

const DetailPageHeading = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin: 32px 0 16px;
  ${media.tablet`
    font-size: 32px;
    margin-top: 16px;
  `}
  ${media.phone`
    font-size: 28px;
  `}
`
const DetailPageCategory = styled.span`
  color: #60A5FA;
  padding: 4px 8px;
  border: 2px solid #60A5FA;
  border-radius: 3px;
  display: inline-block;
  font-size: 14px;
  margin-right: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`

const DetailPageTags = styled.span`
  color: #616269;
  margin-bottom: 10px;
`

const DetailPageTag = styled.span`
  margin-right: 8px;
`

const DetailPageMetaData = styled.div`
  color: #616269;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const DetailPageDate = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.smoke};
`

const DetailPageDateText = styled.span`
  margin-left: 8px;
`

const DetailPageReadingTime = styled.div`
  margin-right: 16px;
`

const DetailPageAuthor = styled.div`
  display: flex;
  align-items: center;
`

const DetailPageAuthorText = styled.span`
  margin-left: 8px;
`

const DetailPageBody= styled.div`
  h2 {
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 8px 24px;
      font-size: 30px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 28px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 26px;
    `}
  }

  h3 {
    font-weight: bold;
    margin: 40px 0 20px;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 4px 16px;
      font-size: 26px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 24px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 22px;
    `}
  }

  h4 {
    margin: 40px 0 20px;
    border-bottom: 3px solid #E5E4E6;
    ${media.desktop`
      padding: 10px 20px;
      font-size: 24px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 22px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 20px;
    `}
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  a {
    word-wrap:break-word;
  }

  ul {
    list-style-position: inside;
  }
`
