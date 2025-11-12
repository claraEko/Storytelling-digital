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
  .to(".zoom-1-a", {
    scale: 1.5,
    y: "50%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-1-b", {
    scale: 3,
    y: "100%",
    filter: "blur(5px)",
    duration: 5,
    ease: "none",
  })
  .to(".zoom-1-title", {
    scale: 2,
    y: "-100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(".zoom-1-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })
  .to(".zoom-2-a", {
    scale: 1.5,
    y: "70%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-2-b", {
    scale: 3,
    y: "100%",
    filter: "blur(5px)",
    duration: 5,
    ease: "none",
  })
  .to(".zoom-2-text", {
    scale: 2,
    x: "100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(".zoom-2-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })
  .to(".zoom-3-a", {
    scale: 1.5,
    y: "70%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-3-b", {
    scale: 3,
    y: "100%",
    filter: "blur(5px)",
    duration: 5,
    ease: "none",
  })
  .to(".zoom-3-text", {
    scale: 2,
    x: "100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(".zoom-3-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  });
