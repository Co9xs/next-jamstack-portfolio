import { GetStaticProps, NextPage } from 'next';
import { Meta } from '@/components/Meta';
import { ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles/utils/common';
import { Layout } from '@/types/index';
import { BrowserWindow } from '@/components/BrowserWindow';
import React from 'react';
import Link from 'next/link';

type Props = {
  layout: Layout
}

const Page404: NextPage<Props> = () => {
  const defaultOgp  = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_90_bold:${encodeURI(`404 Page Not Found`)},co_rgb:FFF,w_1200,c_fit/v1622604816/ogp/OgpImage_1_fdwdbv.png`
  return (
    <>
      <Meta
        title={'404 Not Found'}
        description={'404 Not Found'}
        image={defaultOgp}
        favicon="🙇‍♂️"
      />
      <BrowserWindow>
        <ContentSection>
          <ContentSectionInner>
            <SectionTitle>404 - Not Found</SectionTitle>
            <PlainText>Sorry, The page you are looking for was not found.</PlainText>
            <Link href="/">Return to top</Link>
          </ContentSectionInner>
        </ContentSection>
      </BrowserWindow>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props>  = async () => {
  return {
    props: {
      layout: 'Basic'
    }
  }
}

export default Page404