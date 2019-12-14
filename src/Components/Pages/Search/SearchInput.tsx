import React, { useState, useEffect, useCallback } from "react";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey } from "../../../config";
import { ResultWrapper } from "./SearchStyle";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch, toggleModal } from "../../../store/Toggles/action";
import axios from "axios";
import SearchResult from "./SearchResult";
interface Props {}
interface ToggleProps {
  toggle: {
    modal: boolean;
  };
}
const SearchInput: React.FC<Props> = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<Array<MovieInfo>>();
  const dispatch = useDispatch();
  const modalToggle = useSelector((state: ToggleProps) => state.toggle.modal);
  useEffect(() => {
    if (input) {
      axios
        .get(`${apiUrl}/search/movie?query=${input}&api_key=${apiKey}`)
        .then(({ data }) => {
          setResult(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [input]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (modalToggle) {
      dispatch(toggleModal());
    }
    if (e.target.value === "") {
      setInput("");
    } else {
      setInput(e.target.value);
    }
  };
  const handleLinkClick = useCallback(() => {
    dispatch(toggleSearch());
    setInput("");
  }, [dispatch]);
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
