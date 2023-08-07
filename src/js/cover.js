const coverInit = () => {
  const coverImg = document.querySelector(".about-us__img-cover");
  if (coverImg) {
    console.log(coverImg);
    coverImg.addEventListener("click", function () {
      this.style.display = "none";
    });
  }
};

export default coverInit;
