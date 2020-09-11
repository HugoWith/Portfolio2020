const imgParallax = () => {
  let imgMove = document.querySelectorAll(".paralax");

  document.addEventListener("mousemove", (e) => {
    VanillaTilt.init(imgMove, {
      max: 10,
      speed: 700,
      perspective: 3000,
      glare: true,
      easing: "cubic-bezier(.1,.98,.52,.99)",
    });
  });
  // document.addEventListener("mousemove", parallax);
  // function parallax(e) {
  //   // this.querySelectorAll(".ProjectImg").forEach((img) => {
  //   let speed = imgMove.getAttribute("data-speed");
  //   let x = (window.innerWidth - e.pageX * speed) / 100;
  //   let y = (window.innerWidth - e.pageY * speed) / 100;
  //   imgMove.style.transform = `translateX(${x}) translateY(${y})`;
  //   console.log(x);
  //   console.log(y);
  //   // });
  // }

  // (e) => {
  //   console.log(e);
  //   let clientX = e.clientX;
  //   let clientY = e.clientY;
  //   imgMove.style.transform = "translate(10px, 10px)";
  // });
};

export { imgParallax };
