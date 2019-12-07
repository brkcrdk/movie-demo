import React from "react";

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
    <div>
      <label>{label}</label>
      <hr />
      <select
        style={{ width: "100%", minWidth: "10em" }}
        onChange={onChange}
        defaultValue=" "
      >
        <option value=" ">{defaultValue}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selectbox;
