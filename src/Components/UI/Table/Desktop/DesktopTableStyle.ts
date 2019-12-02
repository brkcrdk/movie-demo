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
export const Head = styled.thead``;
export const Body = styled.tbody``;
export const Row = styled.tr``;
export const Col = styled.th``;
