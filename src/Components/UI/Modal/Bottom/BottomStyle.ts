import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 1em;
`;
export const Tabs = styled.div`
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: scroll;
`;
interface TabProps {
  active: boolean;
}

export const Tab = styled.button`
  width: 100%;
  min-width: 5em;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border: ${(p: TabProps) => (p.active ? "1px solid #ccc" : "")};
  border-bottom: ${(p: TabProps) => (p.active ? "none" : "")};
  background-color: ${(p: TabProps) => (p.active ? "white" : "lightgray")};
  height: ${(p: TabProps) => (p.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
    outline: none;
  }
  > i {
    padding-left: 1em;
  }
`;
interface ContentProps {
  active: boolean;
}
export const Content = styled.div`
  ${(p: ContentProps) => (p.active ? "" : "display:none")};
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
