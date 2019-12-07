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
  top: 5.3em;
  left: 0;
  width: 100%;
  text-align: center;
  input {
    width: 80%;
    padding: 1em;
    margin: 0 auto;
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
    display: grid;
    position: relative;
    width: 100%;
    div {
      background-color: red;
      z-index: 5;
      position: fixed;
      top: 8em;
      padding-top: 1em;
    }
    input {
      padding: 1em 0.5em;
      width: 15em;
      @media ${device.desktop} {
        width: 20em;
      }
      @media ${device.desktopL} {
        width: 25em;
      }
    }
  }
`;
const Container = styled.div``;

const Search: React.FC<Props> = () => {
  const toggle = useSelector((state: ToggleStore) => state.toggle.search);
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
    <Container>
      <Mobile toggle={toggle}>
        <input value={input} onChange={handleInput} placeholder="Search.." />
        <div>
          <ul>
            {result &&
              result.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </div>
      </Mobile>
      <Desktop>
        <input value={input} onChange={handleInput} placeholder="Search.." />
        <div>
          <ol>
            {result &&
              result.map((item, key) => <li key={key}>{item.title}</li>)}
          </ol>
        </div>
      </Desktop>
    </Container>
  );
};

export default Search;
