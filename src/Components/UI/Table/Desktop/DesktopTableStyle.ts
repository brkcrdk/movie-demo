import styled from "styled-components";
import { device } from "../../../../utils";

export const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: block;
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 0 1em;
  border: 1px solid lightgray;
`;
export const Row = styled.tr`
  border-bottom: 1px solid red;
`;
export const Col = styled.th``;
