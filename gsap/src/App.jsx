import React from "react";
import { gsap } from "gsap";

const App = () => {
  const bthclicked = () => {
    gsap.to(".box1", {
      x: 400,
      rotate: 360,
      duration: 2,
      delay: 1,
      backgroundColor: "azure",
      yoyo: "true",
    });
    gsap.fromTo(
      ".box2",
      {
        x: 400,
        rotate: 360,
      },
      {
        x: 0,
        y:"-100%",
        duration: 2,
        delay: 1,
      },
    );
  };
  return (
    <>
      <div className="box1"></div>
      <div className="box2"></div>

      <button onClick={bthclicked}>animate</button>
    </>
  );
};

export default App;
