let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

//basic gsap
// gsap.to(box1, {
//   x: 700,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

// gsap.from(box2, {
//   x: 700,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
// });

// gsap timeline help to execute one in order wise
const tl = gsap.timeline();
// tl.to(box1, {
//   x: 700,
//   delay: 0.5,
//   duration: 1,
//   rotate: 360,
//   stagger:1
// });
//gets current yoyo state

// tl.from(box2, {
//   y: -100,
//   duration: 1,
//   delay: 0.5,
// //   rotate: 360,
//   yoyo:true
  
// });


//