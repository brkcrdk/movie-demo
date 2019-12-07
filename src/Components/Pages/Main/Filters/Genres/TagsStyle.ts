import styled from "styled-components";
import { device } from "../../../../../utils";
export const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`;
export const TagWrapper = styled.div`
  margin: 0.3em;
  border: 1px solid lightgrey;
`;
export const TagName = styled.span`
  padding-right: 0.3em;
`;
export const TagButton = styled.span`
  border: none;
  border-left: 1px solid lightgrey;
  font-weight: 300;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    color: dodgerblue;
  }
`;
