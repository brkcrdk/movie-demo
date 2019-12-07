import React from "react";

interface Props {
  text: string;
}

const Overview: React.FC<Props> = ({ text }) => {
  const shortOverview = text
    .split(" ")
    .filter((x, i) => {
      return i < 10;
    })
    .map(item => {
      return `${item} `;
    });
  return <>{shortOverview}...</>;
};

export default Overview;
