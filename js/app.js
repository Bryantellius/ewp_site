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
  {
    video: "https://www.youtube.com/embed/YK5Qtrm2xDI",
    img: "./img/thumbnails/formetco.png",
  },
  {
    video: "https://www.youtube.com/embed/ZJSfM91L3R8",
    img: "./img/thumbnails/opps2.png",
  },
  {
    video: "https://www.youtube.com/embed/lS301BBNqt4",
    img: "./img/thumbnails/cuisine.png",
  },
  {
    video: "https://www.youtube.com/embed/YdEsfPeSxy8",
    img: "./img/thumbnails/barcc.png",
  },
];

let currVidIdx = 0;
let items = document.querySelectorAll(".videoItem");

function cycleVideos(dir) {
  if (currVidIdx == 0 && dir == -1) {
    currVidIdx = assets.length - 1;
  } else if (currVidIdx == assets.length - 1 && dir == 1) {
    currVidIdx = 0;
  } else {
    currVidIdx += dir;
  }

  for (let item of items) {
    item.classList.add("dim");
    setTimeout(() => {
      item.classList.remove("dim");
    }, 500);
  }

  if (currVidIdx == 0) {
    items[0].src = assets[assets.length - 1].img;
    items[2].src = assets[currVidIdx + 1].img;
  } else if (currVidIdx == assets.length - 1) {
    items[0].src = assets[currVidIdx - 1].img;
    items[2].src = assets[0].img;
  } else {
    items[0].src = assets[currVidIdx - 1].img;
    items[2].src = assets[currVidIdx + 1].img;
  }

  items[1].src = assets[currVidIdx].video;
}

// TOGGLE SIDENAV
let isExpanded = false;
document.querySelector(".menuIcon").addEventListener("click", toggleSideNav);

function toggleSideNav(close = false) {
  if (window.innerWidth < 768) {
    isExpanded = !isExpanded;

    if (isExpanded) {
      document.querySelector(".containerSidebar").style.left = "0";
    } else {
      document.querySelector(".containerSidebar").style.left = "-100%";
    }
  }
}

// EVENT LISTENER FOR PREV AND NEXT VIDEO CYCLE BUTTONS
document.querySelector("#arrowLeft").addEventListener("click", () => {
  cycleVideos(-1);
});
document.querySelector("#arrowRight").addEventListener("click", () => {
  cycleVideos(1);
});

function toggleSideNavItem(e, ele) {
  document
    .querySelectorAll(".nav-link")
    .forEach((ele) => ele.classList.remove("active"));
  ele.classList.add("active");
}

// Load nav-links with click listeners to label active
document.querySelectorAll(".nav-link").forEach((ele) =>
  ele.addEventListener("click", (e) => {
    toggleSideNavItem(e, ele);
    toggleSideNav(true);
  })
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

// SHOWREEL POPUP
window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}
