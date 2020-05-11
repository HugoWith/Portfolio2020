const loader = () => {
  window.addEventListener("load", (e) => {
    let loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
};

export { loader };
