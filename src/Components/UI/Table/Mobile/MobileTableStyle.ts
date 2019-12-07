import styled from "styled-components";
import { device, colours, fonts } from "../../../../utils";
export const Container = styled.div`
  overflow: hidden;
  @media ${device.mobileS} {
    display: block;
    padding: 0.5em;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
export const Content = styled.div`
  button {
    position: absolute;
    right: 2em;
    margin-top: 1em;
  }
`;
export const Wrapper = styled.div`
  font-family: ${fonts.aBeeZee};
  display: grid;
  margin: 1em 0;
  border-radius: 0.3em;
  box-shadow: ${colours.boxShadow};
  border: 0.5px solid lightgrey;
  overflow: hidden;
  @media ${device.mobileS} {
    grid-template-columns: 12fr;
  }
  @media ${device.mobileTablet} {
    grid-template-columns: 4fr 8fr;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  img {
    border-radius: 0.2em;
    @media ${device.mobileS} {
      height: 10em;
      width: 50%;
      object-fit: cover;
    }
    @media ${device.mobileM} {
      height: 10em;
    }
    @media ${device.mobileTablet} {
      width: 100%;
      height: 100%;
    }
  }
`;
export const InfoContainer = styled.div`
  display: grid;
  align-items: center;
  @media ${device.mobileS} {
    grid-gap: 0;
    padding: 1em 0;
  }
  @media ${device.mobileTablet} {
    grid-gap: 0;
    padding: 2em 1em;
  }
`;
export const Header = styled.p`
  padding-left: 2em;
  margin: 0.3em;
  font-weight: 800;
`;
export const Info = styled.p`
  margin: 0.3em;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
`;
