import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid red;
  margin-top: 1em;
`;
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  width: 100%;
`;
export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 49%;
  margin-right: 0.1em;
  font-size: 1.1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
    outline: none;
  }
  > i {
    padding-left: 1em;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")};
  width: 100%;
  height: 100%;
  transition: transform 300ms ease-in-out;
  animation: fade-in 2s;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
