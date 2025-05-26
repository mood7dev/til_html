window.addEventListener("load", function () {
  const tripUrl = "http://127.0.0.1:5500/public/api/trip.json";
  let swTrip;

  // ✅ Trip 데이터 요청 함수
  async function getTripData(url, callback) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      callback(data[0].list); // 핵심: list 배열만 넘김
    } catch (err) {
      console.error("trip 데이터 불러오기 실패:", err);
    }
  }

  // ✅ Trip 슬라이드 HTML 렌더링 + Swiper 초기화
  function renderTripSlides(list) {
    const tripWrapper = document.querySelector(".sw_trip .swiper-wrapper");
    if (!tripWrapper) return;

    // 슬라이드 HTML 생성
    let html = list
      .map(
        (item) => `
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
      `
      )
      .join("");

    // DOM에 렌더링
    tripWrapper.innerHTML = html;

    // 기존 슬라이더 인스턴스 제거
    if (swTrip) swTrip.destroy(true, true);

    // ✅ Swiper 슬라이더 생성 (autoplay 없음)
    swTrip = new Swiper(".sw_trip", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".sw_trip_pg",
        clickable: true,
      },
      navigation: {
        nextEl: ".trip_next",
        prevEl: ".trip_prev",
      },
      /*
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      */
      breakpoints: {
        760: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });

    // 아래 마우스 이벤트 삭제 또는 주석 처리하세요
    /*
    const tripEl = document.querySelector(".sw_trip");
    tripEl.addEventListener("mouseenter", () => swTrip.autoplay.stop());
    tripEl.addEventListener("mouseleave", () => swTrip.autoplay.start());
    */
  }

  // ✅ 실행
  getTripData(tripUrl, renderTripSlides);
});
