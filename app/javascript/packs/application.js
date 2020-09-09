// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
// require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("fullpage");
require("vanilla-tilt");
require("@mojs/core");
// require("gsap");
// require("three");

import { initFullPageJs } from "../components/fullpage";
import { swiper } from "../components/swipper";
import { cursor } from "../components/cursor";
import { imgParallax } from "../components/imgParallax";
import { alert } from "../components/alert";
import { loader } from "../components/loader";
import { animSvg } from "../components/animsvg";
import { animImg } from "../components/animImgGsap";
import { burstJs } from "../components/burst";
import { skills } from "../components/skills";
// initFullPageJs();
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// // initCustom();
initFullPageJs();
// swiper();
cursor();
imgParallax();
alert();
loader();
animSvg();
animImg();
burstJs();
skills();
