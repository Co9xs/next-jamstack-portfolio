import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { NextPage } from 'next';
import { Breadcrumb, ClockIcon, Meta, PersonIcon, SideBarLayout, SnsShareButtonList, ArticleAuthor} from '@/components';
import { PageBase, ContentSection, media } from '@/styles';
import { applyHighlight, calcReadingTime, convertDateToString } from '@/utils';
import { useRouter } from 'next/router'
import { getDraft } from '@/lib';
import { useEffect, useState } from 'react';
import { DraftItem } from '@/apis/blog/_contentId@string';

const Draft: NextPage = () => {
  const { query } = useRouter()
  const [draft, setDraft] = useState<DraftItem | null>(null)

  useEffect(() => {
    async function getDraftData() {
      const draft = await getDraft(query.id as string, query.draftKey as string);
      setDraft(draft)
    }
    if (query.id && query.draftKey) getDraftData()
  }, [query])

  if (!draft) return <div>Loading...</div>

  const highlightedBody = applyHighlight(draft.body)
  const readingTime = calcReadingTime(draft.body.length)
  const publishedAt = convertDateToString(new Date(draft.updatedAt));
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI(draft.title)},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  const ogImage = draft.ogimage ? draft.ogimage.url : defaultOgp

  return (
    <SideBarLayout>
    <PageBase>
      <Meta
        title={draft.title}
        image={ogImage}
      />
      <ContentSection>
        <Image src={ogImage} width={820} height={450} layout={"responsive"} priority={true}/>
        <DetailPageBreadcrumb>
          <Breadcrumb category={draft.category}/>
        </DetailPageBreadcrumb>
        <DetailPageArticle>
          <DetailPageSnsShare>
            <SnsShareButtonList articleId={draft.id}/>
          </DetailPageSnsShare>
          <DetailPageContent>
            <DetailPageHeader>
              <DetailPageHeading>{draft.title}</DetailPageHeading>
              <Link href={`/blog/categories/${draft.category.id}/page/1`}>
                <DetailPageCategory>{draft.category.name}</DetailPageCategory>
              </Link>
              <DetailPageTags>
                {draft.tags.map(tag => (
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
                  <DetailPageAuthorText>{ draft.author?.displayName}</DetailPageAuthorText>
                </DetailPageAuthor>
              </DetailPageMetaData>
            </DetailPageHeader>
            <DetailPageBody
              dangerouslySetInnerHTML={{
                __html: `${highlightedBody}`,
              }}
            />
            <DetailArticleAuthor>
              <ArticleAuthor author={draft.author}/>
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