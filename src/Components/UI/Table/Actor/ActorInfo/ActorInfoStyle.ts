import styled from "styled-components";
import { device, colours } from "../../../../../utils";
export const Container = styled.div`
  align-items: center;
  margin: 0 auto;
  @media ${device.mobileS} {
    display: grid;
  }
  @media ${device.tablet} {
    grid-template-columns: 2fr 10fr;
  }
`;
export const ImgContainer = styled.div`
  img {
    @media ${device.mobileS} {
      height: 5em;
    }
    @media ${device.mobileM} {
      height: 7em;
    }
    @media ${device.tablet} {
      height: 10em;
    }
  }
`;
export const InfoContainer = styled.div`
  display: grid !important;
  align-items: center;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileTablet} {
    margin-left: 0;
  }
  @media ${device.tablet} {
    width: 69%;
    padding: 1em;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  p {
    margin-left: 2em;
    display: flex;
    justify-content: flex-end;
    i {
      margin: 0 1em;
      color: ${colours.pink};
    }
  }
`;
