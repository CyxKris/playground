import { gsap } from "gsap";

const heroText = document.querySelector("h1");
const image = document.querySelector(".image");

const boxes = document.querySelectorAll(".hero-box");

gsap.from([heroText, image], { yPercent: -100, stagger: 0.1, ease: "bounce.out", duration: 1.5 });
gsap.from(boxes, { x: -150, stagger: 0.1 });

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    gsap.to(box, { scale: 1.1 });
  });

  box.addEventListener("mouseout", () => {
    gsap.to(box, { scale: 1 });
  })
});
