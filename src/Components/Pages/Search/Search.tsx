import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey } from "../../../config";
interface Props {}

const Search: React.FC<Props> = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<Array<MovieInfo>>();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input) {
      axios
        .get(`${apiUrl}/search/movie?query=${input}&api_key=${apiKey}`)
        .then(({ data }) => {
          setResult(data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [input]);

  return (
    <div>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ul>
        {result && result.map((item, key) => <li key={key}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default Search;
