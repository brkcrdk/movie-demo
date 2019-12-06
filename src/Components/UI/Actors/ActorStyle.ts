import styled from "styled-components";

interface ContentProps {
  active: boolean;
}
export const Container = styled.div``;
export const Content = styled.ul`
  div {
    display: ${(p: ContentProps) => (p.active ? "flex" : "none")};
    height: ${(p: ContentProps) => (p.active ? "100%" : "0")};
    transition: height 0.5s;
    padding: 0;
    margin: 0;
  }
`;
export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-right: 1em;
    object-fit: cover;
  }
`;
