import styled from "styled-components";
import { fonts } from "../../../../../../utils";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2em;
  padding-bottom: 0.5em;
  overflow: hidden;
  flex-wrap: wrap;
  z-index: -1;
`;
export const TagWrapper = styled.div`
  font-family: ${fonts.aBeeZee};
  margin: 0.3em;
  padding: 0.3em;
  border: 1px solid lightgrey;
  > button {
    color: grey;
    &:hover {
      color: dodgerblue;
    }
  }
`;
export const TagName = styled.span`
  padding-right: 0.3em;
`;
