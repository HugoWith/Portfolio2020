const loader = () => {
  window.addEventListener("load", (e) => {
    let loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.className += "hiddenLoader";
    }, 3500);
  });
};

export { loader };
