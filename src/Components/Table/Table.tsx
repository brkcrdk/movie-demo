import React from "react";

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
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
    </table>
  );
};

export default Table;
