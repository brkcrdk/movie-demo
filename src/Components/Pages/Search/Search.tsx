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
interface MobileProps {
  toggle: boolean;
}

const Mobile = styled.div`
  transform: ${(p: MobileProps) =>
    p.toggle ? "translateX(0)" : "translateX(150%)"};
  transition: transform 0.5s ease-in-out;
  position: fixed;
  top: 4em;
  left: 0;
  border: 1px solid red;
  width: 98%;
  input {
    width: 99%;
    text-align: center;
  }
  @media ${device.mobileS} {
    display: grid;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const Desktop = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;
const Container = styled.div``;

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
    <Container>
      <Mobile toggle={toggle}>
        <input value={input} onChange={handleInput} placeholder="Search.." />
        <ul>
          {result && result.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </Mobile>
      <Desktop>
        <input value={input} onChange={handleInput} placeholder="Search.." />
        <ul>
          {result && result.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </Desktop>
    </Container>
  );
};

export default Search;
