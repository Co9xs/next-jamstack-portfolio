import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import useSWR from 'swr';
import { NextPage } from 'next';
import { Breadcrumb, ClockIcon, Meta, PersonIcon, SideBarLayout, SnsShareButtonList, ArticleAuthor} from '@/components';
import { PageBase, ContentSection, media } from '@/styles';
import { applyHighlight, calcReadingTime, convertDateToString } from '@/utils';
import { API_ENDPOINT } from "@/utils"
import { useRouter } from 'next/router'

const clientConfig = {
  headers: {
    'X-API-KEY': "72043c17-1624-43ab-b921-baca3235eceb"
  }
}

const Draft: NextPage = () => {
  const { query } = useRouter()
  if (query.id === undefined || query.draftKey === undefined) return <div>404</div>
  const fetcher = (url, config) => fetch(url, config).then(res => res.json())
  const {data, error} = useSWR([`${API_ENDPOINT}/blog/${query.id}?draftKey=${query.draftKey}`, clientConfig], fetcher)
  if (!data) return <div>loading</div>
  if (error) return <div>an error occured !, {error}</div>
  console.log(data)
  const article = data
  const highlightedBody = applyHighlight(article.body)
  const readingTime = calcReadingTime(article.body.length)
  const publishedAt = convertDateToString(new Date(article.updatedAt));
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI(article.title)},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  const ogImage = article.ogimage ? article.ogimage.url : defaultOgp
  return (
    <SideBarLayout>
    <PageBase>
      <Meta
        title={article.title}
        image={ogImage}
      />
      <ContentSection>
        <Image src={ogImage} width={820} height={450} layout={"responsive"} priority={true}/>
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
                <DetailPageReadingTime>{readingTime} min read</DetailPageReadingTime>
                <DetailPageAuthor>
                  <PersonIcon/>
                  <DetailPageAuthorText>{ data.author?.displayName}</DetailPageAuthorText>
                </DetailPageAuthor>
              </DetailPageMetaData>
            </DetailPageHeader>
            <DetailPageBody
              dangerouslySetInnerHTML={{
                __html: `${highlightedBody}`,
              }}
            />
            <DetailArticleAuthor>
              <ArticleAuthor author={data.author}/>
            </DetailArticleAuthor>
          </DetailPageContent>
        </DetailPageArticle>
      </ContentSection>
    </PageBase>
    </SideBarLayout>
  )
}

export default Draft

const DetailPageArticle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
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
    padding: 0 0 0 8px;
  }

  a {
    word-wrap:break-word;
  }

  ul {
    list-style-position: inside;
    padding: 0 0 0 8px;
  }

  blockquote {
    position: relative;
    padding: 30px 15px 8px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #efefef;
    color: #555;
    margin: 0;
  }

  blockquote:before{
    display: inline-block;
    position: absolute;
    top: 13px;
    left: 15px;
    content:'”';
    color: #cfcfcf;
    font-size: 28px;
    line-height: 1;
    font-weight: 900;
  }
`

const DetailArticleAuthor = styled.div`
  margin-top: 32px;
`