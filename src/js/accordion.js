const accordionInit = () => {
  const accordions = document.querySelectorAll(".accordion");
  const accordionToggle = (acc) => {
    acc.classList.toggle("active");
  };

  accordions.forEach((acc) => {
    acc.addEventListener("click", () => {
      accordionToggle(acc);
    });
  });
};

export default accordionInit;
