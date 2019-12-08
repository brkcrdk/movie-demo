import styled from "styled-components";
import { device, colours } from "../../../../../../utils";
interface DropdownContent {
  toggle: boolean;
}
export const Dropdown = styled.div`
  position: relative;

  @media ${device.mobileS} {
    width: 100%;
    margin-top: 1em;
  }
  @media ${device.mobileTablet} {
    width: 15em;
    margin-top: 0;
  }
`;
export const DropdownHeader = styled.button`
  display: flex;
  justify-content: space-between;
  width: 96%;
  background-color: transparent;
  border: 0.3px solid grey;
  padding: 0.5em;
`;
export const DropdownContent = styled.div`
  visibility: ${(p: DropdownContent) => (p.toggle ? "visible" : "hidden")};
  display: grid;
  align-items: center;
  position: absolute;
  max-height: ${(p: DropdownContent) => (p.toggle ? "50vh" : "0")};
  transition: max-height 0.2s ease-in-out;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 96%;
  z-index: 2;
  border: 1px solid dodgerblue;
`;
export const DropdownItem = styled.a`
  padding-left: 0.5em;
  padding-top: 0.3em;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: dodgerblue;
  }
`;

export const Label = styled.label`
  margin-bottom: 1em;
`;

export const Splitter = styled.hr`
  border: 0.5px solid ${colours.secondaryText};
`;
