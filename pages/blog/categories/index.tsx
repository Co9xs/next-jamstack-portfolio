import Twemoji from 'react-twemoji';
import { GetStaticProps } from "next";
import { Meta } from '../../../components/common/Meta';
import { Pagination } from '../../../components/Pagination';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../../../styles/utils/common';
import { Category } from '../../../types';
import { getCategories } from '../../../lib/api';
import { CATEGORIES_PER_PAGE } from '../../../utils';
import React from 'react';
import { CategoryList } from '../../../components/CategoryList';

type Props = {
  categories: Category[],
  totalCount: number
}

export default function Categories({ categories, totalCount }: Props) {
  const image = "https://og-image-co9xs.vercel.app/カテゴリ一覧.png"
  return (
    <PageBase>
      <Meta
        title={'Categories'}
        description={'カテゴリ一覧'}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🐱</Twemoji>カテゴリ一覧</SectionTitle>
          <CategoryList categories={categories}/>
          <Pagination totalCount={totalCount} perPage={CATEGORIES_PER_PAGE} currentPage={1} />
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
  console.log(data)
  return {
    props: {
      categories: data.contents,
      totalCount: data.totalCount,
    },
  };
};