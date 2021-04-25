import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import { Meta } from '@/components';
import { Article } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, media } from '@/styles';
import { getArticle, getArticles } from '@/lib';
import { convertDateToString } from '@/utils';
import 'highlight.js/styles/night-owl.css';

type Props = {
  blog: Article,
  highlightedBody: string
}

type Params = {
  id: string
}

const BlogId: NextPage<Props> = (props: Props) => {
  const { blog, highlightedBody } = props;
  const publishedAt = convertDateToString(new Date(blog.publishedAt));
  const image = `https://og-image-co9xs.vercel.app/${blog.title}.png`
  return (
    <PageBase>
      <Meta
        title={blog.title}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'}>
        <ContentSectionInner>
          <DetailPageHeader>
            <DetailPageDate>{ publishedAt }</DetailPageDate>
            <DetailPageHeading>{blog.title}</DetailPageHeading>
            {blog.category &&
              <Link href={`/blog/categories/${blog.category.id}/page/1`}>
                <DetailPageCategory>{ `#${blog.category.name}`}</DetailPageCategory>
              </Link>
            }
          </DetailPageHeader>
          <DetailPageBody
            dangerouslySetInnerHTML={{
              __html: `${highlightedBody}`,
            }}
          />
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await getArticles();
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context: GetStaticPropsContext<Params>) => {
  const { id } = context.params
  const data = await getArticle(id);

  // cheerioとhighlight.jsで事前にハイライトを適用
  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return {
    props: {
      blog: data,
      highlightedBody:$.html()
    },
  };
};

export default BlogId

const DetailPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #E4EDF4;
  padding: 1rem 0;
`

const DetailPageDate = styled.span`
  color: #6B7280;

  //DarkMode
  color: ${({ theme }) => theme.lightGray};
`

const DetailPageHeading = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: .5rem 0;
`

const DetailPageCategory = styled.a`
  color: #60A5FA;
  cursor: pointer;
`

const DetailPageBody= styled.div`
  h2 {
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 10px 20px;
      font-size: 30px;
    `}
    ${media.tablet`
      padding: 10px 20px;
      font-size: 30px;
    `}
    ${media.phone`
      padding: 8px 16px;
      font-size: 28px;
    `}

    //DarkMode
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    border-color: ${({ theme }) => theme.smoke};
  }

  h3 {
    font-weight: bold;
    margin: 40px 0 20px;
    border-left: 3px solid #333;
    ${media.desktop`
      padding: 10px 20px;
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

