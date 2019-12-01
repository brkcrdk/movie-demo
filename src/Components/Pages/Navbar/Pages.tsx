import React from "react";
import Button from "../../UI/PageBtns/Button";
import styled from "styled-components";
import { device } from "../../../utils";
interface Props {}

const Container = styled.div`
  @media ${device.mobileS} {
    display: grid;
    margin: 0.3em;
    width: 90%;
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

const Pages: React.FC<Props> = () => {
  return (
    <Container>
      <Button route="/" innerText="Discover" />
      <Button route="/now_playing" innerText="Now Playing" />
      <Button route="/upcoming" innerText="Upcoming" />
      <Button route="/top_rated" innerText="Top Rated" />
      <Button route="/popular" innerText="Popular" />
    </Container>
  );
};

export default Pages;
