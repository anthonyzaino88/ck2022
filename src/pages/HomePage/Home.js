import React from "react";
import InfoSection from "../../Components/InfoSection/InfoSection";
import Products from "../../Components/Products/Products";
import Events from "../../Components/Events/Events";
import MediaSection from "../../Components/MediaSection/MediaSection";
import { homeObjEvents, homeObjOne, homeObjShop, homeObjTwo } from "./Data";
import "./Home.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Home = () => (
  <>
    <InfoSection {...homeObjOne} />
    <FadeInSection>
      <Events {...homeObjEvents} />
    </FadeInSection>

    <MediaSection {...homeObjTwo} />
    <FadeInSection>
      <Products {...homeObjShop} />
    </FadeInSection>
  </>
);

export default Home;
