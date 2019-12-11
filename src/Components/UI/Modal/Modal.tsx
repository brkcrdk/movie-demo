import React, { useState } from "react";
import { Container, ModalContent, Close } from "./ModalStyle";
interface Props {}

const Modal: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(false);
  };

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
