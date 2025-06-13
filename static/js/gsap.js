


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  defaults: { ease: "power1.out", duration: 1.5 },
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reset",
  },
});

tl.to(".video-overlay", { opacity: 0.5, duration: 1 }, 0);
tl.from(".hero h1", { opacity: 0, y: -30 }, "-=1.2");
// tl.from(".hero p", { opacity: 0, y: 30 }, "-=1");
tl.from(".advanced-search", { opacity: 0, y: 50, duration: 1.5 }, "-=0.5");
tl.from(
  ".advanced-search-btn-container",
  { opacity: 0, y: 50, duration: 1 },
  "-=1.5"
)

const sections = document.querySelectorAll(".animate-on-scroll");

sections.forEach((section) => {
  const textElements = section.querySelectorAll("h1, h2, h3,h4,span, p, ol, li, label, input, textarea, select, button, img, iframe");

  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play none none reset",
      markers: false, 
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  textElements.forEach((textElement, index) => {
    gsap.from(textElement, {
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reset",
        markers: false,
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: index * 0.2,
    });
  });
});