import React from "react";
import styled from "styled-components";
import { device } from "../../utils";
interface Props {
  options: { value: string | number; text: string | number }[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Container = styled.div`
  margin: 0 1em;
`;
const Select = styled.select`
  width: 100%;
  min-width: 10em;
  @media ${device.desktop} {
    width: 15em;
  }
`;

const Selectbox: React.FC<Props> = ({
  label,
  options,
  onChange,
  defaultValue = "None"
}) => {
  return (
    <Container>
      <label>{label}</label>
      <hr />
      <Select onChange={onChange} defaultValue=" ">
        <option value=" ">{defaultValue}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default Selectbox;
