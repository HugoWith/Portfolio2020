const cursor = () => {
  let cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    // let clientX = e.clientX;
    // let clientY = e.clientY;
    // cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

  let h1 = document.querySelectorAll("h1");
  h1.forEach((titre) => {
    console.log(titre);
    titre.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor--bigger");
    });
    titre.addEventListener("mouseleave", (e) => {
      cursor.classList.remove("cursor--bigger");
    });
  });

  let clouds = document.querySelectorAll(".cloudBig");
  let mouseTxt = document.querySelector(".cursor-text");
  clouds.forEach((cloud) => {
    cloud.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor--bigger");
      mouseTxt.innerText = "📌";
    });
    cloud.addEventListener("mouseleave", (e) => {
      cursor.classList.remove("cursor--bigger");
      mouseTxt.innerText = "";
    });
  });

  let link = document.querySelectorAll("a");
  link.forEach((a) => {
    console.log(a);
    a.addEventListener("mouseover", (e) => {
      cursor.classList.add("cursor--big");
    });
    a.addEventListener("mouseleave", (e) => {
      cursor.classList.remove("cursor--big");
    });
  });

  let submit = document.querySelector(".submit").firstElementChild;

  submit.addEventListener("mouseover", (e) => {
    cursor.classList.add("cursor--big");
  });
  submit.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("cursor--big");
  });

  // let target = e.target;
  // target.addEventListener("mouseover", (e) => {
  //   cursor.classList.add("cursor--big");
  // });
};

export { cursor };
