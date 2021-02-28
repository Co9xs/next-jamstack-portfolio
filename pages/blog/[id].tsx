import styled from 'styled-components'

export default function BlogId({ blog }) {
  const convertToDate = (dt: Date) => {
    const year = dt.getFullYear();
    const month = ("00" + (dt.getMonth()+1)).slice(-2);
    const date = ("00" + dt.getDate()).slice(-2);
    const result = `${year}/${month}/${date}`
    return result;
  }
  const publishedAt = convertToDate(new Date(blog.publishedAt));
  return (
    <ContentSection>
      <DetailPageHeader>
        <DetailPageDate>{ publishedAt }</DetailPageDate>
        <DetailPageHeading>{blog.title}</DetailPageHeading>
        <DetailPageCategory>{blog.category && `#${blog.category.name}`}</DetailPageCategory>
      </DetailPageHeader>
      <DetailPageBody
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </ContentSection>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://shima.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return {paths, fallback: false};
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://shima.microcms.io/api/v1/blog/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};

const ContentSection = styled.section`
  padding: 1rem 5rem;
`

const DetailPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px #E4EDF4;
  padding: 1rem 0;
  `

const DetailPageDate = styled.span`
  color: #6B7280;
`

const DetailPageHeading = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: .5rem 0;
`

const DetailPageCategory = styled.div`
  color: #60A5FA;
`

const DetailPageBody= styled.div`
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-left: 3px solid #333;
  }

  h3 {
    font-size: 26px;
    font-weight: bold;
    margin: 40px 0 20px;
    padding: 10px 20px;
    border-left: 3px solid #333;
  }

  h4 {
    font-size: 24px;
    margin: 40px 0 20px;
    padding: 10px 20px;
    border-bottom: 3px solid #E5E4E6;
  }

  p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  ul {
    list-style-position: inside;
  }
`

