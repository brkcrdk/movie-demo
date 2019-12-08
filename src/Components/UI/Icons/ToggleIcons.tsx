import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils";
interface Props {
  onClick?: () => void;
  icon: string;
  iconStyle?: string;
  style?: {};
}

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color: ${colours.pink};
  font-size: 1.2em;
`;

const ToggleIcons: React.FC<Props> = ({
  onClick,
  icon,
  iconStyle = "solid",
  style
}) => {
  return (
    <Button onClick={onClick}>
      <i
        style={style}
        className={`fa${iconStyle === "solid" ? "s" : "r"} fa-${icon}`}
      />
    </Button>
  );
};

export default ToggleIcons;
