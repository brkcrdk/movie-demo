import styled from "styled-components";
interface SlideProps {
  toggle: boolean;
}
export const Container = styled.div``;
export const Slayt = styled.div`
  display: flex;
`;

export const Slide = styled.img`
  display: ${(p: SlideProps) => (p.toggle ? "flex" : "none")};
  width: 100%;
`;
