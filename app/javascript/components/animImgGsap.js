const animImg = () => {
  //   gsap.to("#hugoimg--move", {
  //     duration: 3,
  //     rotation: 360,
  //     scale: 0.5,
  //     delay: 1,
  //   });

  let imgmove = document.querySelector("#hugo--about1");
  let imgmove2 = document.querySelector("#hugo--about2");
  imgmove2.addEventListener("mouseover", (e) => {
    imgmove2.classList.add("hiddenImg");
  });
  imgmove2.addEventListener("mouseleave", (e) => {
    imgmove2.classList.remove("hiddenImg");
  });
};

export { animImg };
