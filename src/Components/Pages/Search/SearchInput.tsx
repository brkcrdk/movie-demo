import React, { useState, useEffect } from "react";
import { MovieInfo } from "../../../store/serverTypes";
import { apiUrl, apiKey, imgUrl } from "../../../config";
import { Link, useLocation } from "react-router-dom";
import { ResultWrapper } from "./SearchStyle";
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

  const location = useLocation();
  const handleLinkClick = () => {
    setInput("");
  };
  // const renderResults =
  //   result &&
  //   result
  //     .filter(result => {
  //       return result.backdrop_path !== null;
  //     })
  //     .map((result, index) => (
  //       <Link
  //         onClick={handleLinkClick}
  //         to={{
  //           pathname: `movie/${result.id}`,
  //           state: { background: location }
  //         }}
  //       >
  //         <li key={index}>
  //           <div>
  //             <img
  //               src={`${imgUrl}/w300${result.backdrop_path}`}
  //               alt={`img-${result.title}`}
  //             />
  //             <span>{result.title}</span>
  //           </div>
  //         </li>
  //       </Link>
  //     ));
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
