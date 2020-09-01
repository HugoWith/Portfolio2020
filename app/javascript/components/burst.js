const burstJs = () => {
  const burst = new mojs.Burst({
    radius: { 0: 100 },
  });
  const DURATION = 400;

  const smoke = new mojs.Burst({
    left: 0,
    top: 0,
    degree: 0,
    count: 3,
    radius: { 0: 100 },
    children: {
      fill: "white",
      pathScale: "rand(0.5, 1)",
      radius: "rand(30, 45)",
      swirlSize: "rand(25, 35)",
      swirlFrequency: "rand(4, 8)",
      direction: [1, -1],
      duration: `rand(${1 * DURATION}, ${2 * DURATION})`,
      delay: "rand(0, 75)",
      easing: "quad.out",
      isSwirl: true,
      isForce3d: true,
    },
  });

  let cloudBig = document.querySelectorAll(".cloudBig");
  let pouf2 = document.querySelector(".pouf2");
  let pouf3 = document.querySelector(".pouf3");
  let pouf4 = document.querySelector(".pouf4");
  let pouf5 = document.querySelector(".pouf5");

  cloudBig.forEach((cloud, index) => {
    console.log(index + cloud);
    cloud.addEventListener("click", function (e) {
      cloud.classList.add("hide-clouds");
      smoke.tune({ x: e.pageX, y: e.pageY }).generate().replay();
      if (index === 0) {
        pouf3.classList.add("pouf");
      } else if (index === 2) {
        pouf2.classList.add("pouf");
      } else if (index === 1) {
        pouf4.classList.add("pouf");
      } else {
        pouf5.classList.add("pouf");
      }
    });
  });
};

export { burstJs };
