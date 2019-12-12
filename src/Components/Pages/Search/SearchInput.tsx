import React, { useState, useEffect } from "react";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey } from "../../../config";
import { ResultWrapper } from "./SearchStyle";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../../store/Toggles/action";
import axios from "axios";
import SearchResult from "./SearchResult";
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
  const dispatch = useDispatch();
  const handleLinkClick = () => {
    dispatch(toggleSearch());
    setInput("");
  };
  const renderResult = result && (
    <SearchResult onClick={handleLinkClick} results={result} />
  );
  return (
    <>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ResultWrapper isEmpty={input !== ""}>
        <ul>{renderResult}</ul>
      </ResultWrapper>
    </>
  );
};

export default SearchInput;
