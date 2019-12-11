import React, { useState, useEffect } from "react";
import { Container, ModalContent, Close, Content, Top } from "./ModalStyle";
import { useHistory } from "react-router-dom";
import { IDetail } from "../../../store/serverTypes";
import { imgUrl } from "../../../config";
interface Props {
  movie: IDetail;
  isLoading: boolean;
}

const Modal: React.FC<Props> = ({ movie, isLoading }) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setToggle(false);
    history.goBack();
  };
  useEffect(() => {
    setToggle(true);
  }, [toggle]);

  const renderTop = movie && (
    <Top>
      <img src={`${imgUrl}/w300${movie.poster_path}`} />
      <p>{movie.original_title}</p>
      {movie.genres && movie.genres.map(genre => <span>{genre.name}</span>)}
      <span>{movie.adult ? "18+" : "7+"}</span>
    </Top>
  );
  return (
    <Container toggle={toggle}>
      <ModalContent url={`${imgUrl}/w780${movie.backdrop_path}`}>
        <Close onClick={handleToggle}>&times;</Close>
        <Content>{renderTop}</Content>
      </ModalContent>
    </Container>
  );
};

export default Modal;
