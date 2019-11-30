import React from "react";

interface Props {
  options: { value: string; text: string }[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selectbox: React.FC<Props> = ({
  label,
  options,
  onChange,
  defaultValue = "Choose here"
}) => {
  return (
    <div>
      <label>{label}</label>
      <hr />
      <select onChange={onChange}>
        <option value="">{defaultValue}</option>
        {options.map((option, index) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

export default Selectbox;
