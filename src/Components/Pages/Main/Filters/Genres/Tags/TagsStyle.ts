import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;
  z-index: 0;
`;
export const TagWrapper = styled.div`
  margin: 0.3em;
  padding: 0.5em;
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
