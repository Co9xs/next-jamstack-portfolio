import { NextPage } from 'next';
import Twemoji from 'react-twemoji';
import { BasicLayout, Meta } from '@/components';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText } from '@/styles';

type Props = {}

const Page404: NextPage<Props> = () => {
  return (
    <BasicLayout>
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
    </BasicLayout>
  );
}

export default Page404