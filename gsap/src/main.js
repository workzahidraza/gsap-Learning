import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
gsap.set(".box1 h1", {
    x:"-100vw"
});

gsap.from(".box1 h1", {
  x: "101vw",
  duration: 3,
  // delay:0.5,
  ease: "none",
  repeat: -1,
});
