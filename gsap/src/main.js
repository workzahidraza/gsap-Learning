import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
// gsap.set(".box1 h1", {
//     x:"-100vw"
// });

// gsap.from(".box1 h1", {
//   x: "101vw",
//   duration: 3,
//   // delay:0.5,
//   ease: "none",
//   repeat: -1,
// });

//stagger
// gsap.to(".boxes .box", {
//   x: 500,
//   duration: 0.9,
//   delay:0.2,
//   stagger: 0.2,
// });

// gsap.from(".boxes .box",{
//   x:500,
//   duration:0.9,
//   stagger:0.3,
// })

// gsap.to(".boxes .box", {
//   x: 500,
//   duration: 0.9,
//   delay: 0.2,
//   stagger: {
//     from: "center",
//     amount: 0.3,
//   },
// });

// const tl = gsap.timeline();

// < , -=0.2  +=0.2, labels = "any random words"

// tl.to(
//   ".box1",
//   {
//     x: 500,
//     duration: 0.9,
//   },
//   "zahid",
// )
//   .to(
//     ".box2",
//     {
//       x: 500,
//       duration: 0.9,
//     },
//     "zah",
//   )
//   .to(
//     ".box3",
//     {
//       x: 500,
//       duration: 0.9,
//     },
//     "zahid",
//   )
//   .to(
//     ".box4",
//     {
//       x: 500,
//       duration: 0.9,
//     },
//     "zah",
//   );

// gsap.from(".content span", {
//   yPercent: 100,
//   duration: 0.5,
//   ease: "power1.out",
//   stagger: {
//     amount: 0.2,
//     from: "edges",
//   },
// });

// const loderContainer = document.querySelector(".loding-content");
// const loder = document.querySelector(".loder h1");
// const img = document.querySelector(".img");
// const textH1 = document.querySelector(".text-content h1");
// const textH2 = document.querySelector(".text-content h2");

// const loaderContainer = document.querySelector(".loading-content");
// const loader = document.querySelector(".loader h1");

// const text = {
//   h1: document.querySelector(".text-content h1"),
//   h2: document.querySelector(".text-content h2"),
// };
// let count = 0;

// const interval = setInterval(() => {
//   count++;
//   loder.innerHTML = `${count}%`;
//   if (count === 100) {
//     clearInterval(interval);
//     afterloading();
//   }
// }, 20);

// function afterloading() {
//   const tl = gsap.timeline();

//   tl.to(loderContainer, {
//     yPercent: -100,
//     duration: 2,
//     ease: "power1.out",
//   })
//     .to(
//       ".img-wrapper",
//       {
//         scale: 1.15,
//         duration: 0.3,
//         ease: "power1.in",
//       },
//       "-=0.9",
//     )
//     .from(
//       textH1,
//       {
//         opacity: 0,
//         duration: 0.7,
//         y: "100%",
//         ease: "power1.in",
//       },
//       "zah",
//     )
//     .from(
//       textH2,
//       {
//         opacity: 0,
//         duration: 0.7,
//         y: "100%",
//         ease: "power1.in",
//       },
//       "zah",
//     );
// }

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");
const reverse = document.querySelector("#reverse");
const seek = document.querySelector("#seek");

const boxes = document.querySelectorAll(".box");

// const tl = gsap.timeline();

tl.to(boxes, {
  x: "50vw",
  duration: 1,

  stagger: 1,
});

play.addEventListener("click", () => {
  tl.play();
});
pause.addEventListener("click", () => {
  tl.pause();
});

resume.addEventListener("click", () => {
  tl.resume();
});

reverse.addEventListener("click", () => {
  tl.reverse();
});

seek.addEventListener("click", () => {
  tl.seek(1); // Jump to 1 second
});

const imgDiv = document.querySelector(".imgDiv .img");
const textContent = document.querySelector(".text-content");
const main = document.querySelector("main");

const tl = gsap.timeline();

// tl.set(imgDiv,{
//   scale:0.3
// })
// tl.to(imgDiv,{
//   scale:1,
//   duration: 1.5,
//   ease: "power3.out",
// })
gsap.from(".imgDiv img", {
  scale: 0.3,
  duration: 1.5,
  ease: "power3.out",
});


import gsap from "gsap";

window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.from(".imgDiv img", {
    scale: 0.3,
    duration: 1.5,
    ease: "power3.out",
  })
    .from(
      ".text-content h1",
      {
        y: 100,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.8"
    )
    .from(
      ".text-content h2",
      {
        y: 100,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6"
    );
});

import gsap from "gsap";

const tl = gsap.timeline();

// Image zoom
tl.from(".imgDiv img",{
    scale:1.6,
    duration:2,
    ease:"power3.out"
})

// Dark overlay fade
.from(".overlay",{
    opacity:0,
    duration:1
},"<")

// Main title
.from(".text-content h1 span",{
    y:180,
    duration:1,
    ease:"power4.out"
},"-=1.2")

// Subtitle
.from(".text-content h2 span",{
    y:120,
    opacity:0,
    duration:1,
    ease:"power4.out"
},"-=0.7")

// Paragraph
.from(".text-content p",{
    opacity:0,
    y:30,
    duration:.8
},"-=0.5")

// Button
.from("button",{
    opacity:0,
    y:40,
    scale:.8,
    duration:.8,
    ease:"back.out(1.7)"
},"-=0.5")

// Floating image effect
.to(".imgDiv img",{
    scale:1.1,
    duration:8,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});