import React, { useState, useEffect } from "react";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey, imgUrl } from "../../../config";
import { ResultWrapper } from "./SearchStyle";
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

  const renderResults =
    result &&
    result
      .filter(result => {
        return result.backdrop_path !== null;
      })
      .map((result, index) => (
        <li key={index}>
          <div>
            <img src={`${imgUrl}/w300${result.backdrop_path}`} />
            <span>{result.title}</span>
          </div>
        </li>
      ));
  return (
    <>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ResultWrapper isEmpty={input !== ""}>
        <ul>{renderResults}</ul>
      </ResultWrapper>
    </>
  );
};

export default SearchInput;
