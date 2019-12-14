import React, { useState, useEffect } from "react";
import { Container, ModalContent, Close, Content } from "./ModalStyle";
import { useHistory } from "react-router-dom";
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import { IDetail } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";
import Loader from "../Loader";
interface Props {
  movie: IDetail;
  isLoading: boolean;
}

const Modal: React.FC<Props> = ({ movie, isLoading }) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setToggle(true);
  }, [toggle]);

  const handleToggle = () => {
    setToggle(false);
    history.goBack();
  };

  const renderTop = movie && (
    <Top
      genres={movie.genres}
      movieTitle={movie.original_title}
      adult={movie.adult}
      posterPath={movie.poster_path}
      voteAvg={movie.vote_average}
      runTime={movie.runtime}
      popularity={movie.popularity}
    />
  );
  const renderBottom = movie && movie.credits && (
    <Bottom
      overview={movie.overview}
      cast={movie.credits.cast}
      similar={movie.similar.results}
    />
  );
  const renderContent = (
    <ModalContent url={`${imgUrl}/w1280${movie.backdrop_path}`}>
      <Close onClick={handleToggle}>&times;</Close>
      <Content>
        {renderTop}
        {renderBottom}
      </Content>
    </ModalContent>
  );
  return (
    <Container toggle={toggle}>
      {isLoading ? (
        <ModalContent>
          <Loader />
        </ModalContent>
      ) : (
        renderContent
      )}
    </Container>
  );
};

export default Modal;
