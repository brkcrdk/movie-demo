import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieInfo } from "../../../store/serverTypes";
import { useSelector } from "react-redux";
import { apiUrl, apiKey } from "../../../config";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {}
interface ToggleStore {
  toggle: {
    search: boolean;
  };
}
interface ContainerProps {
  toggle: boolean;
}
const Container = styled.div`
  transform: ${(p: ContainerProps) =>
    p.toggle ? "translateX(0)" : "translateX(100%)"};
`;

const Search: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.search);
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
    <Container toggle={toggle}>
      <input value={input} onChange={handleInput} placeholder="Search.." />
      <ul>
        {result && result.map((item, key) => <li key={key}>{item.title}</li>)}
      </ul>
    </Container>
  );
};

export default Search;
