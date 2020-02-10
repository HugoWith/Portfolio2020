const initFullPageJs = () => {
  new fullpage("#wrapper", {
    //options here
    licenseKey: "q2NraPV@b1",
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    navigation: true,
    keyboardScrolling: true,
    anchors: ["home", "about", "project", "cv", "contact"],
    onLeave: (origin, destination, direction) => {
      console.log(destination);
      const section = destination.item;
      const title = section.querySelector("h1");
      console.log(title);
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "-40", opacity: 1 });
      if (destination.index === 1) {
        const hugoimg = document.querySelectorAll(".hugoimg");
        const description = document.querySelector(".description");
        tl.fromTo(
          hugoimg,
          2,
          { opacity: 0, x: "-80%" },
          { opacity: 1, x: "25%" }
        )
          .fromTo(
            description,
            0.8,
            { opacity: 0, y: "50" },
            { y: "0", opacity: 1 }
          )
          .fromTo(hugoimg[0], 1, { opacity: 0.3 }, { opacity: 1 })
          .fromTo(hugoimg[1], 2, { opacity: 0 }, { opacity: 1 })
          .fromTo(hugoimg[2], 3, { opacity: 0 }, { opacity: 1 });
      }
    }
  });
};

export { initFullPageJs };
