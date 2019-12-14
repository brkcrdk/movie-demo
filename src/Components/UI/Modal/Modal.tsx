import React, { useEffect, useCallback } from "react";
import { Container, ModalContent, Close, Content } from "./ModalStyle";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IDetail } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";
import { toggleModal } from "../../../store/Toggles/action";
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Loader from "../Loader";
interface Props {
  movie: IDetail;
  isLoading: boolean;
}
interface StoreProps {
  toggle: {
    modal: boolean;
  };
}
const Modal: React.FC<Props> = ({ movie, isLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const toggle = useSelector((state: StoreProps) => state.toggle.modal);
  useEffect(() => {
    dispatch(toggleModal());
  }, [dispatch]);

  const handleToggle = useCallback(() => {
    dispatch(toggleModal());
    history.goBack();
  }, [dispatch]);

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
