import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

const syncedCarouselsInit = () => {
  if (!document.querySelector("#main-carousel")) return;

  const main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
  });

  const thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 160,
    gap: 10,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 120,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
};

const progressCarouselInit = () => {
  if (!document.querySelector("#progress-carousel")) return;

  const progress = new Splide("#progress-carousel", {
    pagination: false,
  });
  const bar = progress.root.querySelector(".progress-carousel-bar");

  progress.on("mounted move", function () {
    const end = progress.Components.Controller.getEnd() + 1;
    const rate = Math.min((progress.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  progress.mount();
};

export { syncedCarouselsInit, progressCarouselInit };
