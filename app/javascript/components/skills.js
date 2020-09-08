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
      timeL.to(".project-preview", 0.5, {
        height: 0,
        width: 0,
        ease: Expo.easeInOut,
      });
    });
    let link1 = document.querySelector(".navigation-link-1");
    let projectP = document.querySelector(".project-preview");
    link1.addEventListener("mouseover", () => {
      projectP.style.background =
        "url('http://drive.google.com/uc?export=view&id=1qUO17eHUgOJ19qWskd8zJc9bbj-FWx50')";
    });
    link1.addEventListener("mouseout", () => {
      projectP.style.background = "none";
    });
    let link2 = document.querySelector(".navigation-link-2");
    link2.addEventListener("mouseover", () => {
      projectP.style.background =
        "url('http://drive.google.com/uc?export=view&id=1sucF3rpws01pXGQwZWtocfnzXWe7pNCm')";
    });
    link2.addEventListener("mouseout", () => {
      projectP.style.background = "none";
    });
    let link3 = document.querySelector(".navigation-link-3");
    link3.addEventListener("mouseover", (e) => {
      console.log(e + "hover link 1");
      projectP.style.background =
        "url('http://drive.google.com/uc?export=view&id=1jHILpEKsjoZtoglfdQucU11XLtZ1GDqR')";
    });
    link3.addEventListener("mouseout", (e) => {
      console.log(e + "hover link 1");
      projectP.style.background = "none";
    });
    let link4 = document.querySelector(".navigation-link-4");
    link4.addEventListener("mouseover", (e) => {
      console.log(e + "hover link 1");
      projectP.style.background =
        "url('http://drive.google.com/uc?export=view&id=1RKbtkGbdpJNgbl-E5JrViIfwNAj-Gs3U')";
    });
    link4.addEventListener("mouseout", (e) => {
      console.log(e + "hover link 1");
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
      timeL2.to(".project-preview", 0.5, {
        width: 0,
        height: 0,
        ease: Expo.easeInOut,
      });
    });
    let link8 = document.querySelector(".navigation-link-8");
    let projectP2 = document.querySelector(".project-preview");
    link8.addEventListener("mouseover", (e) => {
      projectP2.style.background =
        "url('http://drive.google.com/uc?export=view&id=1bBY9PAFZrEtHc2xCT_HYv-3z0mGXtr6Q')";
    });
    link8.addEventListener("mouseout", (e) => {
      console.log(e + "out link 8");
      projectP2.style.background = "none";
    });
    let link9 = document.querySelector(".navigation-link-9");
    link9.addEventListener("mouseover", (e) => {
      projectP2.style.background = "url(/assets/agile.png)";
    });
    link9.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
    let link11 = document.querySelector(".navigation-link-11");
    link11.addEventListener("mouseover", (e) => {
      projectP2.style.background =
        "url('http://drive.google.com/uc?export=view&id=1V2rwxP5E-AU3lAwTKXAQJP7eDpablEfK')";
    });
    link11.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
    let link14 = document.querySelector(".navigation-link-14");
    link14.addEventListener("mouseover", (e) => {
      projectP2.style.background =
        "url('http://drive.google.com/uc?export=view&id=1O9hCg2xictNYA6y6D7vxwvm5nDaVuh7a')";
    });
    link14.addEventListener("mouseout", (e) => {
      projectP2.style.background = "none";
    });
  });
};

export { skills };
