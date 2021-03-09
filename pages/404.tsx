import Twemoji from 'react-twemoji';
import { Meta } from '../components/common/Meta';
import { PageBase, ContentSection, ContentSectionInner, SectionTitle } from '../styles/utils/common';

export default function Page404() {
  return (
    <PageBase>
      <Meta
        title={'Page Not Found'}
        description={'ページが見つかりませんでした'}
      />
      <ContentSection style={{ background: '#F1F5F9' }}>
        <ContentSectionInner>
          <SectionTitle><Twemoji tag="span">🙇</Twemoji>ページが見つかりませんでした。</SectionTitle>
        </ContentSectionInner>
      </ContentSection>
    </PageBase>
  );
}