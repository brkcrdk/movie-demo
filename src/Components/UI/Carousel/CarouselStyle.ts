import styled from "styled-components";
interface SlideProps {
  toggle: boolean;
}
export const Container = styled.div`
  margin: 0 auto;
`;
export const Slayt = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  button {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    &:first-child {
      left: -1.5em;
    }
    &:last-child {
      right: -1.5em;
    }
  }
`;

export const Slide = styled.img`
  display: ${(p: SlideProps) => (p.toggle ? "flex" : "none")};
  width: 100%;
`;
