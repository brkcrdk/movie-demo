import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgContainer = styled.div`
  img {
    height: 10em;
  }
`;
export const InfoContainer = styled.div`
  display: grid !important;
  span {
    padding: 1em 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  p {
    margin-left: 2em;
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
`;
