import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { colours } from "../../../utils";
interface Props {}
const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${colours.pink};
  font-size: 1.2em;
`;
const Favourite: React.FC<Props> = () => {
  return (
    <Button>
      <i className="far fa-heart" />
    </Button>
  );
};

export default Favourite;
