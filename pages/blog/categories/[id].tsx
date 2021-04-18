import Twemoji from 'react-twemoji';
import { GetStaticPaths, GetStaticProps } from "next";
import { Meta } from '../../../components/common/Meta';
import { Pagination } from '../../../components/Pagination';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../../../styles/utils/common';
import { Category } from '../../../types';
import { getCategories, getCategory } from '../../../lib/api';
import { CATEGORIES_PER_PAGE } from '../../../utils';
import React from 'react';
import { CategoryList } from '../../../components/CategoryList';

type Props = {
  category: Category,
}

export default function CategoryId({ category }: Props) {
  const image = `https://og-image-co9xs.vercel.app/${category.name}カテゴリの記事一覧.png`
  return (
    <PageBase>
      <Meta
        title={'Category'}
        description={`${category.name}カテゴリの記事一覧`}
        image={encodeURI(image)}
      />
      <ContentSection background={'#F1F5F9'} style={{flexGrow: '1'}}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🐱</Twemoji>{ category.name }カテゴリの記事一覧</SectionTitle>
          <p>{ category.name }</p>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  )
}

export const getStaticPaths = async (context) => {
  const categories = await getCategories();
  return {
    paths: categories.contents.map(caetgory => {
      return {params: {id: caetgory.id }}
    }),
    fallback: false
  }
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params.id
  const category: Category = await getCategory(id);
  return {
    props: {
      category,
    },
  };
};