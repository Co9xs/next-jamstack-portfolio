import { useHeadingsData } from "@/hooks/useHeadingsData";

type Props = {
  articleBody: string
}

const Headings = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}>{heading.title}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`}>{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const TableOfContents: React.VFC<Props> = (props) => {
  const { articleBody } = props
  const { nestedHeadings } = useHeadingsData(articleBody)
  return (
    <nav aria-label="Table of contents">
      <Headings headings={nestedHeadings} />
    </nav>
  );
};

export default TableOfContents;