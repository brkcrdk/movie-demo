import React from "react";

interface Props {
  onClick?: () => void;
}

const Toggles: React.FC<Props> = () => {
  return (
    <button style={{ border: "none", background: "none", cursor: "pointer" }}>
      <i className="fas fa-search" />
    </button>
  );
};

export default Toggles;
