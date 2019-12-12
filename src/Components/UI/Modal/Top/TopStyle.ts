import styled from "styled-components";
import { fonts, colours, device } from "../../../../utils";
export const Container = styled.div`
  text-align: right;
  font-family: ${fonts.aBeeZee};
  @media ${device.mobileS} {
    display: grid;
  }
  @media ${device.mobileTablet} {
    display: flex;
  }
  > img {
    border-radius: 0.6em;
    margin-right: 1em;
    @media ${device.mobileS} {
      width: 4em;
      margin-bottom: -2em;
    }
    @media ${device.mobileTablet} {
      width: 7em;
      margin-bottom: 0;
    }
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  align-items: flex-end;
`;
export const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  > span {
    margin: 0.1em;
    border-radius: 0.2em;
    background-color: ${colours.pink};
    color: white;
    padding: 0.2em;
    @media ${device.mobileS} {
      font-size: 0.7em;
    }
    @media ${device.mobileTablet} {
      font-size: 1em;
    }
  }
`;
export const RuntimeAdult = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    padding-left: 1em;
  }
`;
export const VotePopularity = styled.div`
  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileTablet} {
    font-size: 1.5em;
  }
  span {
    padding: 0.5em;
  }
  span:last-child {
    button {
      color: orange;
      font-size: 1.3em;
    }
  }
`;
export const Title = styled.p`
  font-weight: 900;
  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileTablet} {
    font-size: 1.5em;
  }
`;
