import React from "react";

interface Props {
  options: (string | number)[];
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
      <select></select>
    </div>
  );
};

export default Selectbox;
