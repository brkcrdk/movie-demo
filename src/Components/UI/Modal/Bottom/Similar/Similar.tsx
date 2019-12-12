import React from "react";
import styled from "styled-components";
import { colours } from "../../../../../utils";

interface Props {}
const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-y: scroll;
  text-align: center;
  div {
    margin: 0 0.5em;
    img {
      width: 7em;
      max-height: 7em;
      object-fit: cover;
      box-shadow: ${colours.boxShadow};
    }
  }
  span {
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const Similar: React.FC<Props> = () => {
  return <div></div>;
};

export default Similar;
