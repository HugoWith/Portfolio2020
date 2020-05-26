const animSvg = () => {
  let path = document.querySelectorAll(".title--svgLetter path");
  console.log(path);
  for (let i = 0; i < path.length; i++) {
    console.log(`${i} test ${path[i].getTotalLength()}`);
  }
};

export { animSvg };
