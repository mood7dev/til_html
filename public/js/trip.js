window.addEventListener("load", function () {
  const tripUrl = "http://127.0.0.1:5500/public/api/trip.json";
  let swTrip;

  async function getTripData(url, callback) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      callback(data[0].list);
    } catch (err) {
      console.error("trip 데이터 불러오기 실패:", err);
    }
  }

  function renderTripSlides(list) {
    const tripWrapper = document.querySelector(".sw_trip .swiper-wrapper");
    if (!tripWrapper) return;

    const html = list
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

    // 기존 슬라이더 제거
    if (swTrip) {
      swTrip.destroy(true, true);
    }

    // 새 HTML 렌더링
    tripWrapper.innerHTML = html;

    // Swiper 슬라이더 생성 (끝에서 멈추게 설정)
    swTrip = new Swiper(".sw_trip", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false, // ✅ 무한 루프 해제
      navigation: {
        nextEl: ".trip_next",
        prevEl: ".trip_prev",
      },
    });
  }

  getTripData(tripUrl, renderTripSlides);
});
