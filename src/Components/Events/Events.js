import React from "react";
import CountdownTimer from "./Countdown/CountdownTimer";
import { Container } from "../../styles/globalStyles";
import { InfoSec, TopLine, ImgWrapper, Img } from "./Events.elements";

const Events = ({
  lightBg,
  lightTopLine,
  topLine,
  start,
  img,
  alt,
  imgStart,
}) => {
  return (
    <InfoSec lightBg={lightBg} imgStart={imgStart}>
      <Container>
        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
        <ImgWrapper start={start}>
          <Img src={img} alt={alt} />
        </ImgWrapper>
        <CountdownTimer />
      </Container>
    </InfoSec>
  );
};

export default Events;
