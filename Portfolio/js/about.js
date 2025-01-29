gsap.registerPlugin(ScrollTrigger);

const split = new SplitType(".about-col h2", {
  types: "words, chars",
});

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "+=125%",
      scrub: 0.5,
    },
  })
  .set(
    split.chars,
    {
      duration: 0.3,
      color: "rgba(91, 154, 236, 0.89)",
      stagger: 0.1,
    },
    0.1
  );
