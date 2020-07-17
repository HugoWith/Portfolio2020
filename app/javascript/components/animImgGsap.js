const animImg = () => {
  //   gsap.to("#hugoimg--move", {
  //     duration: 3,
  //     rotation: 360,
  //     scale: 0.5,
  //     delay: 1,
  //   });
  let controller;
  controller = new ScrollMagic.Controller();
  const revealImg = document.querySelector(".reveal-img");
  let imgmove = document.querySelector("#hugo--about1");
  let imgmove2 = document.querySelector("#hugo--about2");

  //GSAP
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });

  tl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
  // tl.fromTo(imgmove, { scale: 2 }, { scale: 1 }, "-=1");

  slideScene = new ScrollMagic.Scene({
    triggerHook: 0.25,
    reverse: false,
  })
    .addIndicators({
      colorStart: "white",
      colorTrigger: "white",
      name: "slide",
    })
    .addTo(controller);

  imgmove2.addEventListener("mouseover", (e) => {
    imgmove2.classList.add("hiddenImg");
  });
  imgmove2.addEventListener("mouseleave", (e) => {
    imgmove2.classList.remove("hiddenImg");
  });
};

export { animImg };
