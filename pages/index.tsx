import Link from 'next/link'
import { CustomLink } from '../components/CustomLink'
import { Header } from '../components/Header'

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <CustomLink href={`/blog/${blog.id}`} label={blog.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://shima.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};
