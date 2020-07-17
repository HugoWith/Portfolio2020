const initFullPageJs = () => {
  new fullpage("#wrapper", {
    //options here
    licenseKey: "q2NraPV@b1",
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    navigation: true,
    keyboardScrolling: true,
    anchors: ["home", "about", "project", "cv", "contacts"],
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("h1");
      console.log(title);
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "-40", opacity: 1 });
      if (destination.index === 1) {
        console.log(destination.index);
        const hugoimg = document.querySelectorAll(".hugoimg");
        const description = document.querySelector(".description");
        const revealImg = document.querySelector(".reveal-img");

        tl.staggerFrom(
          "#about--text",
          1.5,
          {
            y: "1000px",
            ease: Circ.easeOut,
          },
          0.3
        );
        tl.fromTo(
          revealImg,
          { x: "0%", duration: 0.3 },
          { x: "100%", duration: 1.5 }
        );

        // tl.fromTo(
        //   hugoimg,
        //   2,
        //   { opacity: 0, x: "-80%" },
        //   { opacity: 1, x: "25%" }
        // )
        //   .fromTo(
        //     description,
        //     0.8,
        //     { opacity: 0, y: "50" },
        //     { y: "0", opacity: 1 }
        //   )
        //   .fromTo(hugoimg[0], 1, { opacity: 0.3 }, { opacity: 1 })
        //   .fromTo(hugoimg[1], 2, { opacity: 0 }, { opacity: 1 })
        //   .fromTo(hugoimg[2], 3, { opacity: 0 }, { opacity: 1 });
      } else if (destination.index === 2) {
        const innertextProject = document.querySelector(".innerTextPart");
        const btnProject = document.querySelector(".btnProject");
        tl.staggerFrom(
          innertextProject,
          1.5,
          {
            y: "1000px",
            ease: Circ.easeOut,
          },
          0.3
        );
      } else if (destination.index === 4) {
        const revealImgContact = document.querySelector(".reveal-img--contact");
        tl.fromTo(
          revealImgContact,
          { x: "0%", duration: 0.3 },
          { x: "100%", duration: 1.5 }
        );
      }
    },
  });
};

export { initFullPageJs };
