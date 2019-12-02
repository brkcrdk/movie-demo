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
  overflow: hidden;
`;
export const Head = styled.thead`
  border-bottom: 1px solid lightgray;
  padding-bottom: 1em;
  width: 100%;
  max-width: 93em;
  position: fixed;
  top: 6.9em;
  z-index: 1;
  background-color: white;
`;
export const Body = styled.tbody`
  tr {
    &:hover {
      background-color: lightgray;
      transform: scale(1.005);
      cursor: pointer;
    }
  }
  tr:first-child {
    margin-top: 3em;
  }
`;
export const Row = styled.tr`
  display: grid;
  margin-top: 1em;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 6fr;
  align-items: center;
`;
export const Col = styled.th``;

export const Description = styled.th`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 1em;
`;
