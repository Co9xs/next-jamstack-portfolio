import { ParentHeadingItem, useHeadingsData } from "@/hooks/useHeadingsData";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import styled from "styled-components";

type HeadingProps = {
  headings: ParentHeadingItem[]
  activeId: string
}

const Headings: React.VFC<HeadingProps> = (props) => {
  const { headings, activeId } = props
  const headingClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.querySelector(`#${id}`).scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <HeadingsBase>
      {headings.map((heading) => (
        <li key={heading.id} data-heading-active={heading.id === activeId ? true : false}>
          <a href={`#${heading.id}`}
            onClick={e => headingClickHandler(e, heading.id)}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id} data-heading-active={child.id === activeId ? true : false}>
                  <a href={`#${child.id}`}
                    onClick={e => headingClickHandler(e, child.id)}
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
  )
};

const HeadingsBase = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & > li[data-heading-active=true] > a {
    color: red;
  }
  & > li > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & > li > ul > li[data-heading-active=true] > a {
    color: red;
  }
`

type TocProps = {
  articleBody: string
}

const TableOfContents: React.VFC<TocProps> = (props) => {
  const { articleBody } = props
  const { nestedHeadings } = useHeadingsData(articleBody)
  const [activeId, setActiveId] = useState<string>();
  useIntersectionObserver(setActiveId);

  return (
    <TableOfContentsBase>
      <Headings headings={nestedHeadings} activeId={activeId}/>
    </TableOfContentsBase>
  );
};

export default TableOfContents;

const TableOfContentsBase = styled.nav`
`