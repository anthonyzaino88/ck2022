import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1b1b1b;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
`;

export const ProductsHeading = styled.h1`
  color: rgb(235, 151, 49);
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProductsContainer = styled.div`
  max-width: 1360px;
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1056px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductsCard = styled(Link)`
  background: rgb(235, 151, 49);

  width: 250px;
  height: 450px;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    transform: scale(1.009);
  }
`;

export const ProductsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #1b1b1b;
`;

export const ProductsCardIcon = styled.div`
  height: 220px;
`;

export const ProductsCardPlan = styled.h3`
  font-size: 24px;
  margin-top: 5px;
`;

export const ProductsCardCost = styled.h4`
  font-size: 40px;
  align-items: center;
`;

export const ProductsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProductsCardFeatures = styled.ul`
  margin: 10px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1b1b1b;
`;

export const ProductsCardFeatureAlert = styled.li`
  margin-top: 3px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const ProductsCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  padding-right: 0px;
  padding-bottom: 3px;
  transition: all 0.5s ease-out;
  max-width: 100%;

  display: inline-block;
  max-height: 200px;

  &:hover {
    transform: scale(1.05);
  }
`;
