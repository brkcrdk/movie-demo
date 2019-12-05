import styled from "styled-components";

interface TabProps {
  active: boolean;
}
export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 100%;
  margin-right: 0.1em;
  font-size: 1.1em;
  border: ${(p: TabProps) => (p.active ? "1px solid #ccc" : "")};
  border-bottom: ${(p: TabProps) => (p.active ? "none" : "")};
  background-color: ${(p: TabProps) => (p.active ? "lightgray" : "red")};
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
