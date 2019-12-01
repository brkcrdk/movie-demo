import React from "react";
import Button from "../../UI/PageBtns/Button";
import styled from "styled-components";
interface Props {}

const Container = styled.div`
  display: flex;
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
