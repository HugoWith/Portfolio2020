const dark = function () {
  let darkmode = document.querySelector(".dark-mode-img");
  darkmode.addEventListener("click", (e) => {
    console.log(e);
    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".invert").forEach((i) => {
      i.classList.toggle("inverted");
    });
  });
};

export { dark };
