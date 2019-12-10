import styled from "styled-components";
import { colours, fonts } from "../../../utils";

export const Container = styled.div`
  width: 90%;

  box-shadow: ${colours.darkerBoxShadow};
  position: relative;
  font-family: ${fonts.aBeeZee};
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  > button {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
  }
  > img {
    width: 100%;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  > span {
    text-align: center;
    margin: 0.5em 0;
    font-weight: 700;
    font-size: 1.1em;
  }
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0.5em;
  > div {
    display: grid;
    > span:first-child {
      color: ${colours.pink};
      padding-bottom: 0.5em;
    }
    > span:last-child {
      font-size: 0.9em;
    }
    > hr {
      width: 100%;
      margin: 0;
      margin-bottom: 0.5em;
      padding: 0;
    }
  }
  strong {
    color: ${colours.pink};
  }
`;
