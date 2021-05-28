import styled from 'styled-components'
import { media } from '@/styles';
import { ZennIcon } from './icons/ZennIcon';
import { ExternalPostItem } from '@/types';
import { convertDateToString } from '@/utils/commonFunctions';

type Props = {
  post: ExternalPostItem
}

export const ExternalPost: React.VFC<Props> = (props) => {
  const { post } = props
  return (
    <ExternalPostBase>
      <PlatformIcon>
        <ZennIcon/>
      </PlatformIcon>
      <PostData>
        <PostTitle>{post.title}</PostTitle>
        <PostMetaData>
          <PostDate>{convertDateToString(new Date(post.isoDate))}</PostDate>
        </PostMetaData>
      </PostData>
    </ExternalPostBase>
)
}

const ExternalPostBase = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-2);
  border-radius: var(--border-size-3);
  cursor: pointer;
  &:hover {
    background-color: var(--colors-navy);
    transition: background var(--animation-duration) var(--animation-timing);
  }
  ${media.phone`
    padding: var(--spacing-3) 0;
  `}
`
const PlatformIcon = styled.div`
  width: 10%;
  text-align: center;
  font-size: var(--font-size-5);
  margin-right: var(--spacing-1);
  ${media.phone`
    margin-right: var(--spacing-3);
  `}
`

const PostData = styled.div`
`

const PostTitle = styled.h3`
  margin: 0 0 var(--spacing-2) 0;
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-heading);
`

const PostMetaData = styled.div`
  color: var(--colors-gray);
  display: flex;
  align-items: center;
`

const PostDate = styled.span`
  margin-right: var(--spacing-2);
  display: flex;
  align-items: center;
  ${media.phone`
    // display: none;
  `}
`