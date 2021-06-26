import { NextPage } from 'next';
import { Meta } from '@/components/Meta';
import { ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles/utils/common';
import { BrowserWindow } from '@/components/BrowserWindow';
import React from 'react';
import Link from 'next/link';
import { BasicLayout } from '@/components/layouts/BasicLayout';
import { createOgpUrl } from '@/utils';

type Props = {}

const Page404: NextPage<Props> = () => {
  const defaultOgpUrl  = createOgpUrl(`404 Page Not Found`)
  return (
    <BasicLayout>
      <Meta
        title={'404 Not Found'}
        description={'404 Not Found'}
        image={defaultOgpUrl}
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
    </BasicLayout>
  );
}

export default Page404