import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey } from "../../../config";
interface Props {}

const Search: React.FC<Props> = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Array<MovieInfo>>();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`${apiUrl}/search/movie?query=${input}&api_key=${apiKey}`)
      .then(({ data }) => {
        setResult(data.result);
      })
      .catch(error => {
        console.log(error);
      });
  }, [input]);
  console.log(input);
  console.log(result);
  return (
    <div>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ul></ul>
    </div>
  );
};

export default Search;
