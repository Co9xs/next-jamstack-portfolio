import { GetStaticProps, NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { Meta } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles';
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
          <SectionTitle><Twemoji tag="span">🙇</Twemoji>404 - Not Found</SectionTitle>
          <PlainText>お探しのページは見つかりませんでした</PlainText>
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