// DOM 로드 후 실행
window.addEventListener("load", function () {
  // API 주소
  const dataUrl = "http://127.0.0.1:5500/public/api/tour.json";
  // 현재 출력한 카테고리
  let cateFocusIndex = 0;
  // 카테고리 button 태그 DOM 보관
  let cateButtonArr = [];

  // 카테고리 글자 배열
  let cateNameArr = [];
  // 카테고리별 목록 배열
  let cateListArr = [];

  // API 호출 함수 (async + await 사용)
  async function getData(url, callback) {
    try {
      const res = await fetch(url);
      const _data = await res.json();
      callback(_data);
    } catch (error) {}
  }

  // 데이터를 처리하는 함수
  const parseData = function (_data) {
    // 1. 카테고리 글자만 추출하기
    const cateArr = _data.map((item, index, arr) => {
      // 1개면 _data.map(item => item.cate); 가능
      return item.cate;
    });
    cateNameArr = [...cateArr];

    // 2. 카테고리 목록만 추출하기\
    const listArr = _data.map((item, index, arr) => {
      return item.list;
    });
    cateListArr = [...listArr];

    // 투어 시작
    tourStart();
  };

  function tourStart() {
    makeTourInit(); // 버튼 이벤트 등록
    activeCateFocus(); // 카테고리 포커스 활성화
    addBtsEvent(); // 버튼 이벤트 등록
  }
  // 번호에 따라서 실제 화면에 보여줄 tag 만들기
  // 최초 데이터가 전달되면 1번만 실행
  // 카테고리 버튼은 1번만 만들어도 됨.
  function makeTourInit() {
    // 배치될 장소
    const cateBts = document.querySelector(".section_category_bts");
    // 최종 html 글자
    let html = "";

    cateNameArr.forEach((item, index) => {
      const tag = `<li><button>${item}</button></li>`;
      html += tag;
    });

    cateBts.innerHTML = html;

    // 버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
  }

  // 실시간으로 생성된 버튼에 이벤트 연결하기
  function addBtsEvent() {
    bts.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 동일한 버튼 클릭시 작동 방지
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index; // 클릭한 인덱스로 포커스 변경
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  // 포커스 모두 제거하기
  function removeFocusAll() {
    bts.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }

  // 카테고리 버튼에 현재 포커스 표현하기
  function activeCateFocus() {
    removeFocusAll();
    bts[cateFocusIndex].classList.add("cate_focus");
  }

  // 함수 호출
  getData(dataUrl, parseData);
});
