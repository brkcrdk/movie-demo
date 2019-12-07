import React, { useState, useEffect } from "react";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey } from "../../../config";

import axios from "axios";
interface Props {}

const SearchInput: React.FC<Props> = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<Array<MovieInfo>>();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setTimeout(() => {
        setInput(" ");
        setInput("");
      }, 1000);
    } else {
      setInput(e.target.value);
    }
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
    <>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <div>
        <ul>
          {result && result.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </div>
    </>
  );
};

export default SearchInput;
