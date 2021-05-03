import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText, SectionTitleText } from '@/styles';
import { Layout } from '@/types';

type Props = {
  layout: Layout
}

const Page404: NextPage<Props> = () => {
  return (
    <PageBase>
      <Meta
        title={'Page Not Found'}
        description={'ページが見つかりませんでした'}
      />
      <ContentSection style={{ background: '#F1F5F9', minHeight: '100%'}}>
        <ContentSectionInner>
          <SectionTitle>
            <Twemoji tag="div">🙇‍♂️</Twemoji>
            <SectionTitleText>404 - Not Found</SectionTitleText>
          </SectionTitle>
          <PlainText>Sorry, The page you are looking for was not found.</PlainText>
        </ContentSectionInner>
      </ContentSection>
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