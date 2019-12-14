import styled from "styled-components";
import { device, colours, fonts } from "../../../../../../utils";
interface DropdownContent {
  toggle: boolean;
}

export const Dropdown = styled.div`
  position: relative;
  font-family: ${fonts.aBeeZee};
  @media ${device.mobileS} {
    width: 100%;
    margin-top: 1em;
  }
  @media ${device.tablet} {
    width: 15em;
    margin-top: 0;
  }
`;
export const DropdownHeader = styled.button`
  display: flex;
  justify-content: space-between;
  width: 96%;
  background-color: transparent;
  border: 0.3px solid lightgray;
  padding: 0.5em;
  button{
    color:black;
  }
`;
export const DropdownContent = styled.div`
  visibility: ${(p: DropdownContent) => (p.toggle ? "visible" : "hidden")};
  max-height: ${(p: DropdownContent) => (p.toggle ? "15em" : "0")};
  display: grid;
  align-items: center;
  position: absolute;
  transition: max-height 0.2s ease-in-out;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 96%;
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
  font-weight: 800;
`;
export const Splitter = styled.hr`
  margin: 0.5em 0;
  width: 95%;
  border: 0.5px solid ${colours.secondaryText};
`;
