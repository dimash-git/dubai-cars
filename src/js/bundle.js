// App init
import "../sass/main.scss";
import MicroModal from "micromodal";

import sidebarInit from "./sidebar";
import { syncedCarouselsInit, progressCarouselInit } from "./carousels";
import { phoneInit, datesRangeInit } from "./inputMasks";
import coverInit from "./cover";
import accordionInit from "./accordion";

document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".micromodal-slide");
  if (modals.length !== 0) MicroModal.init();
  sidebarInit();

  phoneInit();
  datesRangeInit();

  coverInit();

  syncedCarouselsInit();
  progressCarouselInit();

  accordionInit();
});
