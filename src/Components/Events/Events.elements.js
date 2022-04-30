import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  height: 700px;
  margin-top 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background: ${({ lightBg }) => (lightBg ? "#1b1b1b" : "#a6a9ae")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? "rgb(235, 151, 49);" : "#1b1b1b"};
  font-size: 40px;
  line-height: 40px;
  font-weight: 100;
  letter-spacing: 1.4px;
  margin-bottom: 60px;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  padding-right: 0px;
  padding-bottom: 0px;
  border-radius: 6px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 350px;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.06);
  }
`;
