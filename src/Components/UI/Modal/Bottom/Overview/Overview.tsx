import React from "react";
import styled from "styled-components";
interface Props {
  overview: string;
}
const Container = styled.div`
  padding: 0 2em;
  p {
    font-size: 1.2;
    padding-bottom: 1em;
  }
`;
const Overview: React.FC<Props> = ({ overview }) => {
  return (
    <Container>
      <p>{overview}</p>
    </Container>
  );
};

export default Overview;
