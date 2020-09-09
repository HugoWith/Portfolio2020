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
  let pouf6 = document.querySelector(".pouf6");

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

  let poufHome = document.querySelector(".cloud_home");
  let cloudBigHome = document.querySelector(".cloudBigHome");
  poufHome.addEventListener("click", (e) => {
    console.log(e);
    cloudBigHome.classList.add("hide-clouds");
    smoke.tune({ x: e.pageX, y: e.pageY }).generate().replay();
    pouf6.classList.add("pouf");
  });

  let drift1 = document.querySelector(".drifting_clouds_left_slow");
  let drift2 = document.querySelector(".drifting_clouds_left");
  let drift3 = document.querySelector(".drifting_clouds_right_slow");
  let drift4 = document.querySelector(".drifting_clouds_right");
  let tl = gsap.timeline({ repeat: -1 });
  tl.fromTo(
    ".drifting_clouds_right",
    { x: "100vw" },
    { x: "-10vw", duration: 80, ease: Linear.easeNone },
    "0.2"
  );
  tl.fromTo(
    ".drifting_clouds_left",
    { x: "-10vw" },
    { x: "100vw", duration: 80, ease: Linear.easeNone },
    "0.2"
  );
  tl.fromTo(
    ".drifting_clouds_right_slow",
    { x: "100vw" },
    { x: "-10vw", duration: 40, ease: Linear.easeNone },
    "0.2"
  );
  tl.fromTo(
    ".drifting_clouds_left_slow",
    { x: "-15vw" },
    { x: "100vw", duration: 40, ease: Linear.easeNone },
    "0.2"
  );
};

export { burstJs };
