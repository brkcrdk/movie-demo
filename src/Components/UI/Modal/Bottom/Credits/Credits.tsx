import React from "react";
import styled from "styled-components";
import { Cast } from "../../../../../store/serverTypes";
import { imgUrl } from "../../../../../config";
import { colours } from "../../../../../utils";

interface Props {
  cast: Cast[];
}

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-y: scroll;
  text-align: center;
  cursor: grab;
  div {
    margin: 0 0.5em;
    img {
      width: 7em;
      max-height: 7em;
      object-fit: cover;
      box-shadow: ${colours.boxShadow};
    }
  }
  span {
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Credits: React.FC<Props> = ({ cast }) => {
  const renderCast =
    cast &&
    cast
      .filter(person => person.profile_path !== null)
      .map((person, index) => (
        <div>
          <img src={`${imgUrl}/w185/${person.profile_path}`} />
          <span>
            <strong>{person.name}</strong>
          </span>
        </div>
      ));
  return <Container>{renderCast}</Container>;
};

export default Credits;
