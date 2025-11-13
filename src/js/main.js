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
// zoom-1
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
  // zoom-2
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
  .to(".zoom-2-moon", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })
  .to(
    ".zoom-2-background",
    {
      scale: 2,
      opacity: 0,
      duration: 3,
      ease: "none",
    },
    "-=3"
  )
  // zoom-3
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
  .to(".zoom-3-g", {
    scale: 1.5,
    y: "100%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-3-c", {
    scale: 1.5,
    y: "70%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-3-h", {
    scale: 1.5,
    y: "120%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-3-d", {
    scale: 1.5,
    y: "70%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-3-text", {
    scale: 2,
    x: "100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(
    ".zoom-3-2-text",
    {
      scale: 2,
      x: "-100%",
      duration: 5,
      opacity: 0,
      ease: "none",
    },
    "-=5"
  )
  .to(".zoom-3-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })
  // zoom-4
  .to(".zoom-4-a", {
    scale: 1.5,
    y: "50%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-4-b", {
    scale: 3,
    y: "100%",
    filter: "blur(5px)",
    duration: 5,
    ease: "none",
  })
  .to(".zoom-4-text", {
    scale: 2,
    x: "100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(
    ".zoom-4-2-text",
    {
      scale: 2,
      x: "-100%",
      duration: 5,
      opacity: 0,
      ease: "none",
    },
    "-=5"
  )
  .to(".zoom-4-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })

  // zoom-5
  .to(".zoom-5-a", {
    scale: 1.5,
    y: "100%",
    duration: 5,
    filter: "blur(5px)",
    ease: "none",
  })
  .to(".zoom-5-b", {
    scale: 3,
    y: "100%",
    filter: "blur(5px)",
    duration: 5,
    ease: "none",
  })
  .to(".zoom-5-text", {
    scale: 2,
    x: "100%",
    duration: 5,
    opacity: 0,
    ease: "none",
  })
  .to(
    ".zoom-5-2-text",
    {
      scale: 2,
      x: "100%",
      duration: 5,
      opacity: 0,
      ease: "none",
    },
    "-=5"
  )

  .to(".zoom-5-background", {
    scale: 2,
    opacity: 0,
    duration: 3,
    ease: "none",
  })
  // scroll
  .to(".scroll", { y: "-50%", duration: 4, ease: "power1.in" }, "-=1")
  .to(".scroll-b", { y: "-5%", duration: 4, ease: "power1.in" }, "-=1")
  .to(".scroll-c", { y: "-5%", duration: 4, ease: "power1.in" }, "-=3.5")
  .to(".scroll-d", { y: "-5%", duration: 4, ease: "power1.in" }, "-=3.5");
