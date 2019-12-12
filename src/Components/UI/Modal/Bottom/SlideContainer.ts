import styled from "styled-components";
import { colours } from "../../../../utils";

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
