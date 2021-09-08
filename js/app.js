console.log("Script Attached");

const assets = [
  {
    video: "https://www.youtube.com/embed/UBJ5QDsHkBg",
    img: "./img/thumbnails/apex.png",
  },
  {
    video: "https://www.youtube.com/embed/EbI0sTNdE-o",
    img: "./img/thumbnails/opps1.png",
  },
  {
    video: "https://www.youtube.com/embed/HjzPdJBZylI",
    img: "./img/thumbnails/hkt.png",
  },
  { video: "https://www.youtube.com/embed/YK5Qtrm2xDI", img: "" },
  { video: "https://www.youtube.com/embed/ZJSfM91L3R8", img: "" },
  { video: "https://www.youtube.com/embed/lS301BBNqt4", img: "" },
  { video: "https://www.youtube.com/embed/YdEsfPeSxy8", img: "" },
];

let lastVidIdx = 0;
let items = document.querySelectorAll(".videoItem");
for (let item = 0; item < 3; item++) {
  if (item == 1) {
    items[item].src = assets[lastVidIdx].video;
  } else {
    items[item].src = assets[lastVidIdx].img;
  }
  lastVidIdx++;
}

function toggleSideNavItem(e, ele) {
  document
    .querySelectorAll(".nav-link")
    .forEach((ele) => ele.classList.remove("active"));
  ele.classList.add("active");
}

// Load nav-links with click listeners to label active
document
  .querySelectorAll(".nav-link")
  .forEach((ele) =>
    ele.addEventListener("click", (e) => toggleSideNavItem(e, ele))
  );

const screenHeight = window.innerHeight;

// Add active label upon load
document
  .querySelectorAll(".nav-link")
  [Math.floor(window.scrollY / screenHeight)].classList.add("active");

// Scroll by's for sections to label nav-links as active
window.addEventListener("scroll", () => {
  const i = Math.floor(window.scrollY / screenHeight);
  console.log(i);
  document.querySelectorAll(".nav-link").forEach((ele, idx) => {
    if (idx === i) ele.classList.add("active");
    else ele.classList.remove("active");
  });
});
