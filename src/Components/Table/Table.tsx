import React from "react";
import { IDetail } from "../../store/serverTypes";

interface Props {}

const Table: React.FC<Props> = () => {
  return (
    <table>
      <tr>
        <th>Movie Title</th>
        <th>Date</th>
        <th>Short Description</th>
        <th>Time</th>
        <th>IMDB Average</th>
        <th>Votes</th>
      </tr>
    </table>
  );
};

export default Table;
