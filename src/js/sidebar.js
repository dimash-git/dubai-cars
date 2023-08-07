const sidebarInit = () => {
  const burger = document.querySelector(".nav-burger");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");
  const sidebar = document.querySelector(".sidebar");
  const openSidebar = () => {
    sidebarOverlay.style.height = "100%";
    sidebar.style.cssText = "transform: translateX(0);";
    console.log("show");
  };
  const hideSidebar = () => {
    sidebarOverlay.style.height = "0";
    sidebar.style.cssText = "transform: translateX(-950px);";
    console.log("closed");
  };
  burger.addEventListener("click", function () {
    openSidebar();
  });
  document
    .querySelector(".sidebar .btn-close")
    .addEventListener("click", function () {
      hideSidebar();
    });
  sidebarOverlay.addEventListener("click", function (e) {
    if (e.target === this) {
      /*
          We've checked if the event.target (the element that triggered the event)
          is the .sidebar-nav--overlay itself by comparing it to 'this'. 
        */
      hideSidebar();
    }
  });
};

export default sidebarInit;
