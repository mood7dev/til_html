window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  header.addEventListener("click", function () {
    alert("표준 반가워");
  });

  const logo = document.querySelector(".logo");
  console.log(logo);

  const search = document.querySelector(".search");
  console.log(search);

  const headerTopLeft = document.querySelector(".header_top_left");
  console.log(headerTopLeft);

  const headerTopRight = document.querySelector(".header_top_right");
  console.log(headerTopRight);

  const eventMenu = document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", function () {
    const scrolly = window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrolly <= 70) {
      console.log("모두 보여라");
    } else {
      console.log("일부만 보여라");
    }
  });
});
