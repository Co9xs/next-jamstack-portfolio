import { useHeadingsData } from "@/hooks/useHeadingsData";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  articleBody: string
}

const Headings = ({ headings, activeId }) => (
  <HeadingsBase>
    {headings.map((heading) => (
      <li key={heading.id} data-heading-active={heading.id === activeId ? true : false}>
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
              <li key={child.id} data-heading-active={child.id === activeId ? true : false}>
                <a href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`).scrollIntoView({
                      behavior: "smooth"
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
  </HeadingsBase>
);

const HeadingsBase = styled.ul`
  & > li[data-heading-active=true] {
    color: red!important;
    & > ul > li[data-heading-active=true] {
      color: red!important;
    }
  }
`

const TableOfContents: React.VFC<Props> = (props) => {
  const { articleBody } = props
  const { nestedHeadings } = useHeadingsData(articleBody)
  const [activeId, setActiveId] = useState();
  useIntersectionObserver(setActiveId);

  return (
    <TableOfContentsBase>
      <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
      <Headings headings={nestedHeadings} activeId={activeId}/>
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