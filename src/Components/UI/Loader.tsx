import React from "react";
import styled from "styled-components";
import { colours } from "../../utils";
interface Props {}
const Spinner = styled.div`
  border: 0.25em solid ${colours.secondaryText};
  border-top: 0.25em solid ${colours.pink};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  margin: 4em 0;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100%;
`;
const Loader: React.FC<Props> = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
