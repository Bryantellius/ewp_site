$(document).ready(function () {
  // Single Page Nav for highlighting nav items
  $("#tmMainNav").singlePageNav();

  // Carousel in Our Work section
  $(".tm-gallery").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // Image Pop Up
  $(".tm-gallery").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "iframe",
    gallery: { enabled: true },
  });

  $(".tm-intro").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "iframe",
    gallery: { enabled: true },
  });

  $(".navbar-toggler").on("click", function (e) {
    $(".tm-sidebar").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function (e) {
    var sidebar = document.getElementById("tmSidebar");

    if (!sidebar.contains(e.target)) {
      $(".tm-sidebar").removeClass("show");
    }
  });

  $("#tmMainNav .nav-link").click(function (e) {
    $(".tm-sidebar").removeClass("show");
  });

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
    document.querySelectorAll(".nav-link").forEach((ele, idx) => {
      if (idx === i) ele.classList.add("active");
      else ele.classList.remove("active");
    });
  });
});
