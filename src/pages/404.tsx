import { GetStaticProps, NextPage } from 'next';
import { Meta } from '@/components/Meta';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles/utils/common';
import { Layout } from '@/types/index';
import { BrowserWindow } from '@/components/BrowserWindow';
import React from 'react';
import Link from 'next/link';

type Props = {
  layout: Layout
}

const Page404: NextPage<Props> = () => {
  const defaultOgp = `https://res.cloudinary.com/fujishima/image/upload/l_text:Sawarabi%20Gothic_45_bold:${encodeURI('404 - Page Not Found')},co_rgb:333,w_800,c_fit/v1620608065/ogp/OgpImage_a2vlnk.png`
  return (
    <PageBase>
      <Meta
        title={'404 Not Found'}
        description={'404 Not Found'}
        image={encodeURI(defaultOgp)}
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
    </PageBase>
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