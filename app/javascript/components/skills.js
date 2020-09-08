const skills = () => {
  let timeL = gsap.timeline();
  let navItem = document.querySelectorAll(".list1");
  navItem.forEach((item) => {
    console.log(item);
    item.addEventListener("mouseover", (e) => {
      console.log(e + "mouseover");
      let timeL = gsap.timeline();
      timeL.to(".project-preview", 1, {
        width: "300px",
        ease: Expo.easeInOut,
      });
    });
    item.addEventListener("mouseout", (e) => {
      console.log(e + "mouseout");
      let timeL = gsap.timeline();
      timeL.to(".project-preview", 0.5, {
        width: 0,
        ease: Expo.easeInOut,
      });
    });
    let link1 = document.querySelector(".navigation-link-1");
    let projectP = document.querySelector(".project-preview");
    link1.addEventListener("mouseover", (e) => {
      console.log(e + "hover link 1");
      projectP.style.background =
        "url('http://drive.google.com/uc?export=view&id=1ZKDccN5DWokaa0RODfuVigPEVYYMgfic')";
    });
    link1.addEventListener("mouseout", (e) => {
      console.log(e + "hover link 1");
      projectP.style.background = "none";
    });
  });
};

export { skills };
