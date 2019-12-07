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

  return (
    <>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ResultWrapper isEmpty={input !== ""}>
        <ul>
          {result &&
            result.map((item, key) => (
              <li key={key}>
                <div>
                  <img src={`${imgUrl}/w300${item.backdrop_path}`} />
                  <span>{item.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </ResultWrapper>
    </>
  );
};

export default SearchInput;
