type Props = {
  searchQuery: string,
  setSearchQuery: any
}

export const Search: React.VFC<Props> = (props) => {
  const { searchQuery, setSearchQuery } = props;
  return (
    <form method="get" action="/blog/page/1">
      <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search articles"
          name="search"
      />
    </form>
  )
}