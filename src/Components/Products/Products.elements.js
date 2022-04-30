import styled from "styled-components";

export const ProductsSection = styled.div`
  height: 800px;
  margin-top: 60px;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1b1b1b;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

}
`;

export const ProductsHeading = styled.h1`
  color: rgb(235, 151, 49);
  font-size: 48px;
  margin-bottom: 100px;

  text-align: center;
`;

export const ProductsContainer = styled.div`
  max-width: 1360px;
  height: 500px;
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1318px) {
    grid-auto-flow: column;
    grid-auto-columns: 21%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1rem;
  }
`;

export const ProductsCard = styled.div`
  background: rgb(235, 151, 49);
  display: grid;
  grid-template-rows: min-content;
  width: 250px;
  height: 450px;
  text-decoration: none;
  border-radius: 4px;

  scroll-snap-align: start;
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

  &:hover {
    transform: scale(1.05);
  }
`;
