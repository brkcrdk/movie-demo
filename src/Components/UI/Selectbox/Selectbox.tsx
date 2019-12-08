import React from "react";
import { Container, Select, Option, Splitter, Label } from "./SelectboxStyle";
interface Props {
  options: { value: string | number; text: string | number }[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Selectbox: React.FC<Props> = ({
  label,
  options,
  onChange,
  defaultValue = "None"
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Splitter />
      <Select onChange={onChange} defaultValue=" ">
        <Option value=" ">{defaultValue}</Option>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default Selectbox;
