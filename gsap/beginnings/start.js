import { gsap } from "gsap";

const heroText = document.querySelector("h1");
const image = document.querySelector(".image");
const boxImages = document.querySelectorAll(".hero-box > img");

const boxes = document.querySelectorAll(".hero-box");

gsap.from([heroText, image], { yPercent: -100, stagger: 0.1, ease: "bounce.out", duration: 1.5 });
gsap.from(boxes, { x: -150, stagger: 0.1 });

boxImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    gsap.to(image, { scale: 1.1 });
  });

  image.addEventListener("mouseout", () => {
    gsap.to(image, { scale: 1 });
  })
});
