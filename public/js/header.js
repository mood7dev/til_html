window.addEventListener("DOMContentLoaded", function () {
  // 헤더 선택
  const header = document.querySelector(".header");

  const logo = document.querySelector(".logo");
  if (logo) console.log(logo);

  const search = document.querySelector(".search");
  if (search) console.log(search);

  const headerTopLeft = document.querySelector(".header_top_left");
  if (headerTopLeft) console.log(headerTopLeft);

  const headerTopRight = document.querySelector(".header_top_right");
  if (headerTopRight) console.log(headerTopRight);

  const eventMenu = document.querySelector(".header_bottom_eventmenu");
  if (eventMenu) console.log(eventMenu);
});

// CSS 선택자 문자열들을 배열로 모아둠
// 각각의 문자열은 DOM에서 요소를 선택할 때 사용됨
const elements = [
  ".logo", // class="logo" 인 요소
  ".search", // class="search" 인 요소
  ".header_top_left", // class="header_top_left" 인 요소
  ".header_top_right", // class="header_top_right" 인 요소
  ".header_bottom_eventmenu", // class="header_bottom_eventmenu" 인 요소
];

// 배열에 담긴 각 CSS 선택자(selector)를 반복하면서
elements.forEach((selector) => {
  // 현재 선택자에 해당하는 요소를 문서에서 찾아서 el 변수에 저장
  const el = document.querySelector(selector);

  // 만약 해당 요소(el)가 실제로 존재한다면
  if (el) {
    // 콘솔에 요소를 출력 (개발자 도구에서 확인 가능)
    console.log(el);
  }
});

// 스크롤 추가
window.addEventListener("DOMContentLoaded", function () {
  const headerBottom = document.querySelector(".header_bottom");
  const header = document.querySelector(".header");

  if (!headerBottom || !header) return;

  // 기준점: header의 높이만큼 스크롤되면 고정 시작
  const threshold = header.offsetTop + header.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= threshold) {
      headerBottom.classList.add("fixed");
    } else {
      headerBottom.classList.remove("fixed");
    }
  });
});

// 홈 투어 티켓 클릭
document.querySelectorAll(".nav li a").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav li a")
      .forEach((l) => l.classList.remove("focus"));
    link.classList.add("focus");
  });
});
