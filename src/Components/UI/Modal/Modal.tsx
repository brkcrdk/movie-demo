import React, { useState, useEffect } from "react";
import { Container, ModalContent, Close, Content } from "./ModalStyle";
import { useHistory } from "react-router-dom";
import Top from "./Top/Top";
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
    <Top
      genres={movie.genres}
      movieTitle={movie.original_title}
      adult={movie.adult}
      posterPath={movie.poster_path}
    />
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
