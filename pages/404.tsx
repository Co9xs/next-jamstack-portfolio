import Twemoji from 'react-twemoji';
import { Meta } from '../components/common/Meta';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle, PlainText } from '../styles/utils/common';

export default function Page404() {
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