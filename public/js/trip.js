window.addEventListener("load", function () {
  const apiUrl = "http://127.0.0.1:5500/public/api/trip.json";
  let cateFocusIndex = 0;
  let cateButtonArr = [];
  let cateNameArr = [];
  let cateListArr = [];
  let swTrip;

  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.error("데이터 요청 실패:", error);
    }
  }

  const parseData = function (data) {
    cateNameArr = data.map((item) => item.cate);
    cateListArr = data.map((item) => item.list);
    makeTripInit();
    activeCateFocus();
    addWtripEvent();
  };

  function makeTripInit() {
    const cateWtrip = document.querySelector(".highlight_category_Wtrip");
    let html = "";

    cateNameArr.forEach(function (item) {
      html += `<li><button>${item}</button></li>`;
    });

    cateWtrip.innerHTML = html;
    cateButtonArr = document.querySelectorAll(
      ".highlight_category_Wtrip > li > button"
    );
  }

  function addWtripEvent() {
    cateButtonArr.forEach(function (item, index) {
      item.addEventListener("click", function () {
        if (cateFocusIndex === index) return;
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  function removeFocusAll() {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }

  function activeCateFocus() {
    cateButtonArr[cateFocusIndex].classList.add("cate_focus");
    makeTripListHtml();
  }

  function makeTripListHtml() {
    const swTripWrap = document.querySelector(".sw_trip .swiper-wrapper");
    let html = "";
    const listArr = cateListArr[cateFocusIndex];

    listArr.forEach(function (item) {
      html += `
          <div class="swiper-slide">
            <div class="bodyitem">
              <a href="${item.link}">
                <div class="bodyitem_image">
                  <img src="${item.image}" alt="${item.title}" title="${item.title}" />
                </div>
                <span class="bodyitem_name">${item.city}</span>
                <div class="bodyitem_text">
                  <span class="bodyitem_cupon">${item.title}</span>
                  <p class="bodyitem_desc">${item.content}</p>
                  <span class="bodyitem_price"><b>${item.price}</b>원~</span>
                </div>
              </a>
            </div>
          </div>
        `;
    });

    swTripWrap.innerHTML = html;

    if (swTrip) {
      swTrip.destroy(true, true);
    }

    swTrip = new Swiper(".sw_trip", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".trip_next",
        prevEl: ".trip_prev",
      },
    });
  }

  getData(apiUrl, parseData);
});
