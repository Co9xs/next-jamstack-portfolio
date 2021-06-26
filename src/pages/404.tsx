import Link from 'next/link';
import { NextPage } from 'next';
import { createOgpUrl } from '@/utils';
import { Meta } from '@/components/Meta';
import { BrowserWindow } from '@/components/BrowserWindow';
import { BasicLayout } from '@/components/layouts/BasicLayout';
import { ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles/utils/common';

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
            <SectionTitle>404 - Not Found 🙇‍♂️</SectionTitle>
            <PlainText>Sorry, The page you are looking for was not found.</PlainText>
            <PlainText>
              <Link href="/">Return to Home</Link>
            </PlainText>
            <PlainText>
              <Link href="/blog/page/1">Return to Blog</Link>
            </PlainText>
          </ContentSectionInner>
        </ContentSection>
      </BrowserWindow>
    </BasicLayout>
  );
}

export default Page404