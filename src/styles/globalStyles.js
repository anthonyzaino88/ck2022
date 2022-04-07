import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#1b1b1b" : "#1b1b1b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: rgb(235, 151, 49);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    color: black;
    background-color: ${({ primary }) =>
      primary ? "black" : "rgb(235, 151, 49)"};
    box-shadow: none;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#1b1b1b" : "#1b1b1b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: rgb(235, 151, 49);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover {
    color: black;
    background-color: ${({ primary }) =>
      primary ? "black" : "rgb(235, 151, 49)"};
    box-shadow: none;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ShopButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#1b1b1b" : "#1b1b1b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: rgb(235, 151, 49);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  transition: 0.5s;
  &:hover {
    font-size: 17px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
