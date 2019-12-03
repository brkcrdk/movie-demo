import styled from "styled-components";
import { device, fonts } from "../../../../utils";

interface DescriptionProps {
  toggle: boolean;
}

export const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  font-family: ${fonts.aBeeZee};
  @media ${device.tablet} {
    font-size: 0.8em;
  }
  @media ${device.desktop} {
    font-size: 1em;
  }
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
    margin-top: 4em;
  }
`;
export const Row = styled.tr`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 5fr;
  align-items: center;
  padding: 0 1em;
`;

export const ColHeader = styled.th``;

export const Col = styled.td``;
export const DetailCol = styled.td``;

export const Description = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  visibility: ${(p: DescriptionProps) => (p.toggle ? "hidden" : "visible")};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 1em;
  line-height: 1.5em;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 1em;
  }
  img {
    border-radius: 50%;
    object-fit: cover;

    @media ${device.tablet} {
      width: 2em;
      height: 2em;
    }
    @media ${device.desktop} {
      width: 3em;
      height: 3em;
    }
  }
  span {
    padding-left: 1em;
  }
`;
