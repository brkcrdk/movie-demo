import React from "react";
import { Cast } from "../../../../../store/serverTypes";
import { imgUrl } from "../../../../../config";
import { Container } from "../SlideContainer";
interface Props {
  cast: Cast[];
}

const Credits: React.FC<Props> = ({ cast }) => {
  const renderCast =
    cast &&
    cast
      .filter(person => person.profile_path !== null)
      .map((person, index) => (
        <div>
          <img
            src={`${imgUrl}/w185/${person.profile_path}`}
            alt={`poster-${person.name}`}
          />
          <span>
            <strong>{person.name}</strong>
          </span>
        </div>
      ));
  return <Container>{renderCast}</Container>;
};

export default Credits;
