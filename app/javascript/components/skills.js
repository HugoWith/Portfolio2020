const skills = () => {
  let timeL = gsap.timeline();
  let navItem = document.querySelectorAll(".list1");
  navItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let timeL = gsap.timeline();
      timeL.to(".project-preview", 1, {
        width: "300px",
        height: "300px",
        ease: Expo.easeInOut,
      });
    });
    item.addEventListener("mouseout", () => {
      let timeL = gsap.timeline();
      timeL.to(".project-preview", 1, {
        height: 0,
        width: 0,
        ease: Expo.easeInOut,
      });
    });
    let link1 = document.querySelector(".navigation-link-1");
    let projectP = document.querySelector(".project-preview");
    link1.addEventListener("mouseover", () => {
      projectP.style.background = "url('/assets/skills/consilium.png')";
    });
    link1.addEventListener("mouseout", () => {
      projectP.style.background = "none";
    });
    let link2 = document.querySelector(".navigation-link-2");
    link2.addEventListener("mouseover", () => {
      projectP.style.background = "url('/assets/skills/sz.png')";
    });
    link2.addEventListener("mouseout", () => {
      projectP.style.background = "none";
    });
    let link3 = document.querySelector(".navigation-link-3");
    link3.addEventListener("mouseover", (e) => {
      projectP.style.background = "url('/assets/skills/snos.png')";
    });
    link3.addEventListener("mouseout", (e) => {
      projectP.style.background = "none";
    });
    let link4 = document.querySelector(".navigation-link-4");
    link4.addEventListener("mouseover", (e) => {
      projectP.style.background = "url('/assets/skills/wawet.png')";
    });
    link4.addEventListener("mouseout", (e) => {
      projectP.style.background = "none";
    });
  });

  let timeL2 = gsap.timeline();
  let navItemlist2 = document.querySelectorAll(".list2");
  navItemlist2.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let timeL2 = gsap.timeline();
      timeL2.to(".project-preview", 1, {
        width: "300px",
        height: "300px",
        ease: Expo.easeInOut,
      });
    });
    item.addEventListener("mouseout", () => {
      let timeL2 = gsap.timeline();
      timeL2.to(".project-preview", 1, {
        width: "0px",
        height: "0px",
        ease: Expo.easeInOut,
      });
    });
    let link8 = document.querySelector(".navigation-link-8");
    let projectP2 = document.querySelector(".project-preview");
    link8.addEventListener("mouseover", (e) => {
      projectP2.style.background = "url('/assets/skills/qab.png')";
    });
    link8.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
    let link9 = document.querySelector(".navigation-link-9");
    link9.addEventListener("mouseover", (e) => {
      projectP2.style.background = "url(/assets/skills/agile.png)";
    });
    link9.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
    let link11 = document.querySelector(".navigation-link-11");
    link11.addEventListener("mouseover", (e) => {
      projectP2.style.background = "url('/assets/skills/lls.png')";
    });
    link11.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
    let link14 = document.querySelector(".navigation-link-14");
    link14.addEventListener("mouseover", (e) => {
      projectP2.style.background = "url('/assets/skills/footcourt.png')";
    });
    link14.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
  });
};

export { skills };
