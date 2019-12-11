import React, { useState, useEffect } from "react";
import { Container, ModalContent, Close, BackgroundImg } from "./ModalStyle";
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

  return (
    <Container toggle={toggle}>
      <ModalContent url={`${imgUrl}/w780${movie.backdrop_path}`} />
      <BackgroundImg>
        Content goes here<Close>&times;</Close>
      </BackgroundImg>
    </Container>
  );
};

export default Modal;
