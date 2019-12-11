import React, { useState, useEffect } from "react";
import { Container, ModalContent, Close } from "./ModalStyle";
import { useHistory } from "react-router-dom";
interface Props {}

const Modal: React.FC<Props> = () => {
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
      <ModalContent>
        <Close onClick={handleToggle}>&times;</Close>
        <p>Modal Content</p>
      </ModalContent>
    </Container>
  );
};

export default Modal;
