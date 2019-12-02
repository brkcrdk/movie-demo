import styled from "styled-components";
import { device } from "../../../../utils";

export const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: inline-block;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
`;
export const Head = styled.thead`
  border-bottom: 1px solid lightgray;
  position: fixed;
  top: 6.9em;
  z-index: 1;
  background-color: white;
`;
export const Body = styled.tbody`
  tr {
    margin-top: 3em;
  }
`;
export const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 6fr;
  grid-gap: 0.5em;
  align-items: center;
`;
export const Col = styled.th``;
