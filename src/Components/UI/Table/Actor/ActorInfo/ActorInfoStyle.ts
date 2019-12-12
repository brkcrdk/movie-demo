import styled from "styled-components";
import { device, colours } from "../../../../../utils";
export const Container = styled.div`
  align-items: center;
  @media ${device.mobileS} {
    display: grid;
    text-align: center;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
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
  span {
    padding: 1em 1em 1em 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  p {
    margin-left: 2em;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    i {
      margin: 0 1em;
      color: ${colours.pink};
    }
  }
`;
