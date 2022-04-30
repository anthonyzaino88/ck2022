import styled from "styled-components";
import { GiHockey } from "react-icons/gi";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: rgb(235, 151, 49);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1b1b1b;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  padding-left: 60px;
  display: flex;
  margin-top: 60px;
  margin-bottom: 20px;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
  @media screen and (max-width: 520px) {
    padding-left: 30px;
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #1b1b1b;
  margin-bottom: 20px;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #1b1b1b;
  text-decoration: none;
  padding: 2px 2px 2px;
  transition: 0.5s;
  &:hover {
    font-size: 15px;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  height: 185px;
  display: flex;
  padding: 15px 15px 15px;
  justify-content: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px auto 0 auto;
  flex-direction: column;
`;

export const SocialLogo = styled(Link)`
  color: #1b1b1b;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled(GiHockey)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #1b1b1b;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #1b1b1b;
  font-size: 24px;
`;
