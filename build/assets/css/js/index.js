const spaceMainHeader = document.querySelector(".space-main-header");
const mainHeader = document.querySelector(".main-header");
const headerTop = document.querySelector(".top-header");
const megaMenu = document.querySelector(".mega-menu");
const toggleMobile = document.querySelector(".toggle-mobile");
const sideMobile = document.querySelector(".side-mobile");
const sideMobileChild = document.querySelector(".side-mobile > div");
const closeMobileSideBtn = document.querySelector(".close-mobile-side");
const toggleMegaMenuMobile = document.querySelector(".toggle-mega-menu-mobile");
const toggleCertiSub = document.querySelector(".toggle-certi-sub");
const megaMenuMobile = document.querySelector(".mega-menu-mobile");
const certiSub = document.querySelector(".certi-sub");
const header = document.querySelector("header");
const megaMenuTitles = document.querySelectorAll(".mega-title");
const pathname = window.location.pathname;

toggleMobile.onclick = function () {
  if (sideMobile.classList.contains("hidden")) {
    sideMobile.classList.remove("hidden");
    sideMobile.classList.add("block");
  } else {
    sideMobile.classList.remove("block");
    sideMobile.classList.add("hidden");
  }
};
sideMobile.onclick = function (e) {
  if (this.classList.contains("hidden")) {
    this.classList.remove("hidden");
    this.classList.add("block");
  } else {
    this.classList.remove("block");
    this.classList.add("hidden");
  }
};
sideMobileChild.onclick = function (e) {
  e.stopPropagation();
};
closeMobileSideBtn.onclick = function () {
  sideMobile.classList.remove("block");
  sideMobile.classList.add("hidden");
};

let prevScrollpos = window.pageYOffset;
spaceMainHeader.style.height = mainHeader.offsetHeight + "px";

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    if (
      document.body.scrollTop >
        headerTop.offsetHeight + mainHeader.offsetHeight ||
      document.documentElement.scrollTop >
        headerTop.offsetHeight + mainHeader.offsetHeight
    ) {
      mainHeader.classList.add("active");
      spaceMainHeader.classList.add("active");
    } else {
      mainHeader.classList.remove("active");
      spaceMainHeader.classList.remove("active");
    }
  } else {
    mainHeader.classList.remove("active");
    spaceMainHeader.classList.remove("active");
  }

  prevScrollpos = currentScrollPos;

  if (mainHeader.classList.contains("active")) {
    megaMenu.style.top = "105px";
  } else {
    megaMenu.style.top = "150px";
  }
});

toggleMegaMenuMobile.onclick = function () {
  megaMenuMobile.classList.toggle("active");
};
toggleCertiSub.onclick = function () {
  certiSub.classList.toggle("active");
};

megaMenuTitles.forEach((item, idx) => {
  const data = item.getAttribute("data");
  if (pathname.includes(data)) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});
