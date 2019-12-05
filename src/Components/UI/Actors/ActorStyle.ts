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
  margin-right: 3em;
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
  height: ${(p: TabProps) => (p.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
    outline: none;
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
  animation: content 2s;
  @keyframes content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
