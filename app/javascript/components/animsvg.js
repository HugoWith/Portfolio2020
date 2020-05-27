const animSvg = () => {
  let allh2 = document.querySelector(".title--vertical");
  allh2.addEventListener("mouseover", (e) => {
    let liquidText = document.querySelector("#h2numero1");
    liquidText.classList.add("animation--text");
  });

  allh2.addEventListener("mouseleave", (e) => {
    let liquidText = document.querySelector("#h2numero1");
    setTimeout(() => {
      liquidText.classList.remove("animation--text");
    }, 3000);
  });
};

export { animSvg };
