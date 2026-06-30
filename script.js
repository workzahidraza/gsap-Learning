let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

gsap.to(box1, {
  x: 700,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from(box2, {
  x: 700,
  duration: 2,
  delay: 1,
  rotate:360
});
