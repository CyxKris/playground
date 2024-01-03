import "@phosphor-icons/web/light";
import "@phosphor-icons/web/bold";
import "@phosphor-icons/web/regular";

import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-card"); //btn
  const menuButton = document.querySelector(".menu-button"); //send
  const linksCard = document.querySelector(".menu-links"); //links
  const linkItems = linksCard.querySelectorAll(".link");

  // linksCard.style.display = "none";
  // linksCard.classList.add("hidden");

  const closedDimensions = {
    width: menu.offsetWidth,
    height: menu.offsetHeight
  };

  // linksCard.style.display = "block";
  // linksCard.classList.remove("hidden");
  // linksCard.classList.add("block");

  const openDimensions = {
    width: menu.offsetWidth,
    height: menu.offsetHeight
  };

  linksCard.classList.remove("hidden");

  gsap.set(linksCard, { autoAlpha: 0 });
  gsap.set(menuButton, { autoAlpha: 1 });

  menu.style.width = `${closedDimensions.width}`;
  menu.style.height = `${closedDimensions.height}`;

  let isOpen = false;

  const toggleMenu = () => {
    const timelineSettings = isOpen
      ? {
          buttonSize: closedDimensions,
          alpha1: 0,
          alpha2: 1,
          scaleValue: 1,
          marginTop: 0
        }
      : {
          buttonSize: openDimensions,
          alpha1: 1,
          alpha2: 0,
          scaleValue: 0,
          marginTop: -menu.offsetHeight / 6
        };

    const t1 = gsap.timeline();
    t1.to(menu, {
      duration: 0.75,
      width: `${timelineSettings.buttonSize.width}px`,
      height: `${timelineSettings.buttonSize.height}px`,
      ease: "elastic.out"
    })
      .to(
        menuButton,
        {
          duration: 0.125,
          autoAlpha: timelineSettings.alpha2,
          scale: timelineSettings.scaleValue,
          marginTop: timelineSettings.marginTop
        },
        0
      )
      .to(
        linksCard,
        {
          duration: 0.2,
          autoAlpha: timelineSettings.alpha1,
          delay: isOpen ? -0.2 : 0.125
        },
        0
      );

    linkItems.forEach((link) => {
      link.classList.toggle("hidden");
      link.classList.toggle("opacity-0");
    });

    isOpen = !isOpen;
  };

  menu.addEventListener("click", toggleMenu);

  linksCard.querySelectorAll(".link a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (isOpen) toggleMenu();
    });
  });
});
