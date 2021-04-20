import React from 'react';
import { GetStaticProps, NextPage } from "next";
import Twemoji from 'react-twemoji';
import { Meta } from '@/components/common/Meta';
import { CategoryList } from '@/components/CategoryList';
import { Article, Category } from '@/types';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '@/styles/utils/common';
import { getArticles, getCategories } from '@/lib/api';
import { CATEGORIES_PER_PAGE } from '@/utils';

type Props = {
  categories: Category[],
  totalCount: number
}

const Categories: NextPage<Props> = ({ categories, totalCount }) => {
  const image = "https://og-image-co9xs.vercel.app/カテゴリ一覧.png"
  return (
    <PageBase>
      <Meta
        title={'カテゴリ一覧'}
        description={'カテゴリ一覧'}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🐱</Twemoji>カテゴリ一覧</SectionTitle>
          <CategoryList categories={categories}/>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const data: {
    contents: Category[],
    totalCount: number
  } = await getCategories({ offset: 0, limit: CATEGORIES_PER_PAGE });
  const categories = await Promise.all(data.contents.map(async (category) => {
    const data: {
      contents: Article[],
      totalCount: number
    } = await getArticles({ offset: 0, limit: CATEGORIES_PER_PAGE, category })
    return {
      ...category,
      articleCount: data.totalCount
    }
  }))
  return {
    props: {
      categories,
      totalCount: data.totalCount,
    },
  };
};

export default Categories