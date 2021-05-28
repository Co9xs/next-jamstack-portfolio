import styled from 'styled-components'
import { ExternalPostItem } from '@/types'
import { ExternalPost } from './ExternalPost'

type Props = {
  posts: ExternalPostItem[]
}

export const ExternalPostList: React.VFC<Props> = (props) => {
  const { posts } = props
  return (
    <ExternalPostListBase>
      {posts.map(post => (
        <Anchor href={post.link} target="_blank" rel="noopener" key={post.title}>
          <PostListItem>
           <ExternalPost post={post}/>
          </PostListItem>
        </Anchor>
      ))}
    </ExternalPostListBase>
  )
}

const ExternalPostListBase = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const PostListItem = styled.li`
`

const Anchor = styled.a`
  text-decoration: none;
  color: var(--colors-white)!important;
`

