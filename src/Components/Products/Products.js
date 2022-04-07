import React from "react";
import { ShopButton } from "../../styles/globalStyles";
import { IconContext } from "react-icons/lib";
import {
  ProductsSection,
  ProductsWrapper,
  ProductsHeading,
  ProductsContainer,
  ProductsCard,
  ProductsCardInfo,
  ProductsCardIcon,
  ProductsCardPlan,
  ProductsCardFeatures,
  ProductsCardFeature,
  ProductsCardFeatureAlert,
  Img,
} from "./Products.elements";

const Products = ({ img1, img2, img3, img4, img5, alt, start }) => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ProductsSection>
        <ProductsWrapper>
          <ProductsHeading>CK Shop</ProductsHeading>
          <ProductsContainer>
            <ProductsCard to="https://citrus-kings-hockey.myshopify.com/products/ck-hockey-short-sleeve-tee">
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <Img src={img1} alt={alt} />
                </ProductsCardIcon>
                <ProductsCardPlan>Sick Celly</ProductsCardPlan>
                <ProductsCardFeatures>
                  <ProductsCardFeature>T-Shirt</ProductsCardFeature>
                  <ProductsCardFeatureAlert>
                    New Merch Avalible Now!
                  </ProductsCardFeatureAlert>
                </ProductsCardFeatures>
                <ShopButton big>Buy Now</ShopButton>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to="https://citrus-kings-hockey.myshopify.com/products/sick-celly-tee">
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <Img src={img2} alt={alt} />
                </ProductsCardIcon>
                <ProductsCardPlan>CK Hockey</ProductsCardPlan>
                <ProductsCardFeatures>
                  <ProductsCardFeature>T-Shirt</ProductsCardFeature>
                  <ProductsCardFeatureAlert>
                    New Merch Avalible Now!
                  </ProductsCardFeatureAlert>
                </ProductsCardFeatures>
                <ShopButton big>Buy Now</ShopButton>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to="https://citrus-kings-hockey.myshopify.com/products/no-pulp-short-sleeve-tee">
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <Img src={img3} alt={alt} />
                </ProductsCardIcon>
                <ProductsCardPlan>Groovy Oscar</ProductsCardPlan>
                <ProductsCardFeatures>
                  <ProductsCardFeature>T-Shirt</ProductsCardFeature>
                  <ProductsCardFeatureAlert>
                    New Merch Avalible
                  </ProductsCardFeatureAlert>
                </ProductsCardFeatures>
                <ShopButton big>Buy Now</ShopButton>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to="https://citrus-kings-hockey.myshopify.com/products/no-pulp-short-sleeve-tee">
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <Img src={img4} alt={alt} />
                </ProductsCardIcon>
                <ProductsCardPlan>No Pulp</ProductsCardPlan>
                <ProductsCardFeatures>
                  <ProductsCardFeature>T-Shirt</ProductsCardFeature>
                  <ProductsCardFeatureAlert>
                    New Merch Avalible
                  </ProductsCardFeatureAlert>
                </ProductsCardFeatures>
                <ShopButton big>Buy Now</ShopButton>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to="https://citrus-kings-hockey.myshopify.com/products/no-pulp-short-sleeve-tee">
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <Img src={img5} alt={alt} />
                </ProductsCardIcon>
                <ProductsCardPlan>With The Gang</ProductsCardPlan>
                <ProductsCardFeatures>
                  <ProductsCardFeature>T-Shirt</ProductsCardFeature>
                  <ProductsCardFeatureAlert>
                    New Merch Avalible
                  </ProductsCardFeatureAlert>
                </ProductsCardFeatures>
                <ShopButton big>Buy Now</ShopButton>
              </ProductsCardInfo>
            </ProductsCard>
          </ProductsContainer>
        </ProductsWrapper>
      </ProductsSection>
    </IconContext.Provider>
  );
};
export default Products;
