import styled from "styled-components";
import { device } from "../../../../utils";
interface ExpandableProps {
  expand: boolean;
}
interface SlaytProps {
  toggle: boolean;
}
export const Expandable = styled.div`
  width: 100%;

  #content {
    display: ${(p: ExpandableProps) => (p.expand ? "grid" : "none")};
    overflow: hidden;
    grid-template-columns: repeat(2, 6fr);
    width: 100%;
    border-top: 1px solid red;
    padding: 0.5em;
  }
`;

export const Content = styled.div`
  animation-name: contentFade;
  animation-duration: 0.3s;
  @keyframes contentFade {
    from {
      color: white;
      transform: scale(1, 0);
    }
    to {
      color: initial;
      transform: scale(1);
    }
  }
`;

export const Slayt = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 0.5em;
  @media ${device.tablet} {
    grid-template-columns: 12fr;
    div {
      width: 80%;
      margin: 0 auto;
    }
    p {
      margin-top: -12em;
      padding: 0 3em;
    }
  }
`;
export const ActorSection = styled.div``;
