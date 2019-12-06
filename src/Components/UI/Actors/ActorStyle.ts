import styled from "styled-components";

interface ContentProps {
  active: boolean;
}
export const Container = styled.div``;
export const Content = styled.ul`
  div {
    display: ${(p: ContentProps) => (p.active ? "block" : "none")};
  }
`;
export const List = styled.li``;
