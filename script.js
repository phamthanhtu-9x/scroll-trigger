var containers = gsap.utils.toArray(".element");

// containers.forEach(function (container) {
//   gsap.from(container, {
//     scrollTrigger: {
//       trigger: container,
//       scrub: true,
//       start: "top bottom",
//       end: "top top",
//     },
//     scaleY: 0,
//     transformOrigin: "top center",
//     ease: "none",
//   });
// });

containers.forEach(function (container) {
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      gsap.set(container, {
        clipPath:"polygon(0% -100%, 100% -100%, 100% -30%, 0% -30%)",
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=150px",
          end: "+=" + window.innerHeight,
          scrub: true,
        }
      }).to(container, {
        clipPath:"polygon(0% 0%, 100% 0%, 100% 150%, 0% 150%)",
      });
    }
  })
});