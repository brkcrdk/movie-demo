import styled from "styled-components";
import { device, colours } from "../../../../utils";
export const Container = styled.div`
  @media ${device.mobileS} {
    display: block;
    padding: 0.5em;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 8fr;
  margin: 1em 0;
  border-radius: 0.3em;
  box-shadow: ${colours.boxShadow};
  border: 0.5px solid lightgrey;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  img {
    border-radius: 0.2em;
    width: 100%;
    height: 100%;
  }
`;
export const InfoContainer = styled.div`
  align-items: center;
  margin-top: 1em;
  padding: 0.5em 1em;
`;
export const Header = styled.p`
  padding-left: 2em;
  margin: 0.3em;
`;
export const Info = styled.p`
  margin: 0.3em;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;

export const Splitter = styled.hr`
  border: 0.5px solid lightgrey;
`;
