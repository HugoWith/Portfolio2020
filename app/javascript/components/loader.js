const loader = () => {
  window.addEventListener("load", (e) => {
    let loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.className += " hidden";
    }, 4000);
  });
};

export { loader };
