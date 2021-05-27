import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta } from '@/components/Meta';
import { SkillIconList } from '@/components/SkillIconList';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles/utils/common';
import { Layout } from '@/types/index';
import styled from 'styled-components'
import React from 'react';
import { PageWindow } from '@/components/PageWindow';

type Props = {
  layout: Layout
}

const Home: NextPage<Props> = (props) => {
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI('Fujishima.dev')},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  return (
    <PageWindow>
      <div style={{height: '200%'}}>中身</div>
      <div>中身</div>
    </PageWindow>
  )
}

export const getStaticProps: GetStaticProps<Props>  = async () => {
  return {
    props: {
      layout: 'Basic'
    }
  }
}

export default Home
