console.log("Script Attached");

const assets = [
  {
    video: "https://www.youtube.com/embed/-Jz1wsT7y9s", // main
    img: "./img/thumbnails/showreel-thumbnail.jpg",
  },
  {
    video: "https://www.youtube.com/embed/6eIB8Sfb2fU", // altria
    img: "./img/thumbnails/altria-thumbnail.jpg",
  },
  {
    video: "https://www.youtube.com/embed/WOUMMMAw7R0", // rms
    img: "./img/thumbnails/rms-thumbnail.jpg",
  },
  {
    video: "https://www.youtube.com/embed/f711_QC3pR0", // fpx
    img: "./img/thumbnails/fpx-thumbnail.jpg",
  },
  {
    video: "https://www.youtube.com/embed/UBJ5QDsHkBg",
    img: "./img/thumbnails/apex-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/EbI0sTNdE-o",
    img: "./img/thumbnails/opps-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/HjzPdJBZylI",
    img: "./img/thumbnails/hkt-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/YK5Qtrm2xDI",
    img: "./img/thumbnails/formetco-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/ZJSfM91L3R8",
    img: "./img/thumbnails/opps-technologies-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/lS301BBNqt4",
    img: "./img/thumbnails/barcc-thumbnail.png",
  },
  {
    video: "https://www.youtube.com/embed/NvifQ1CbQHE", // cuisine solutions
    img: "./img/thumbnails/cuisine-solutions-thumbnail.jpg",
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

function toggleSideNav() {
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
document.querySelector("#prevImgThumbnail").addEventListener("click", () => {
  cycleVideos(-1);
});
document.querySelector("#nextImgThumbnail").addEventListener("click", () => {
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
  [Math.round(window.scrollY / screenHeight)].classList.add("active");

// Scroll by's for sections to label nav-links as active
window.addEventListener(
  "scroll",
  (e) => {
    const i = Math.round(window.scrollY / screenHeight);
    console.log(window.scrollY, i);
    document.querySelectorAll(".nav-link").forEach((ele, idx) => {
      if (idx === i) ele.classList.add("active");
      else ele.classList.remove("active");
    });
  },
  false
);

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
}

var stopAllYouTubeVideos = () => {
  var iframes = document.querySelectorAll("iframe");
  Array.prototype.forEach.call(iframes, (iframe) => {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "stopVideo" }),
      "*"
    );
  });
};

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  stopAllYouTubeVideos();
}

// CONTACT FORM
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let myForm = document.querySelector("form");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
      let alertBox = document.querySelector(".alert");
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      alertBox.classList.remove("d-none");
      setTimeout(() => alertBox.classList.add("d-none"), 4000);
    })
    .catch((error) => alert(error));
});
