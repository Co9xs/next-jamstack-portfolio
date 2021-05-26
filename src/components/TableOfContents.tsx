import { useHeadingsData } from "@/hooks/useHeadingsData";
import styled from "styled-components";

type Props = {
  articleBody: string
}

const Headings = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`).scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                    });
                  }}
                >
                  {child.title}
                </a>
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
    <TableOfContentsBase>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <Headings headings={nestedHeadings} />
    </TableOfContentsBase>
  );
};

export default TableOfContents;

const TableOfContentsBase = styled.nav`
`

const TableOfContentsTitle = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
`