import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".l-container",
    start: "top top",
    end: "bottom+=500% top",
    scrub: true,
    pin: true,
    markers: false,
  },
});

// === Séquence d’animations ===
tl.to(".first-button", {
  y: "200%",
  duration: 1,
  opacity: 0,
  ease: "none",
})
  .to(
    ".zoom-1-a",
    {
      scale: 1.5,
      y: "50%",
      duration: 5,
      filter: "blur(5px)",
      ease: "none",
    },
    "-=0.5"
  )
  .to(
    ".zoom-1-b",
    {
      scale: 3,
      y: "100%",
      filter: "blur(5px)",
      duration: 6,
      ease: "none",
    },
    "-=2"
  )
  .to(
    ".zoom-1-text",
    {
      scale: 2,
      y: "-200%",
      duration: 3,
      ease: "none",
    },
    "-=5.5"
  )
  .to(
    ".zoom-1-background",
    {
      scale: 2,
      opacity: 0,
      duration: 1,
      ease: "none",
    },
    "-=3"
  );
