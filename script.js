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
// const tl = gsap.timeline();
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

let navbar = document.querySelector("#navbar");
let navbarH2 = document.querySelector("#navbar h2");
let RightNavbar = document.querySelectorAll("#navbar .right-nav h3");

// gsap.to(navbar,{
//     backgroundColor:"red"
// })

gsap.from(navbarH2, {
  y: -100,
  delay: 1,
  duration: 0.5,
  stagger: 0.1,
});
gsap.from(RightNavbar, {
  y: -100,
  delay: 1,
  duration: 2,
  stagger: 0.1,
});

let page2 = document.querySelector(".page2 ");
let page2H1 = document.querySelector(".page2 h1");

gsap.to(page2, {
  scrollTrigger: {
    trigger: page2,
    start:"top 0%"
  },
});
