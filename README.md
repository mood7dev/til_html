# git add .

git commit

git branch 이름
git switch 이름

## 코드비교(유료) : beyond compare

# CSS

- 16진수

### 1.1 lnline 방식

- html 태그에 직접 작성해 주는 방식

### 1.2 link 방식

- file로 작성해서 link 하는 방식 (경로/파일명.css)
- css 폴더/common.css 파일을 생성

### 1.3 @import 방식

- css 파일에서 또다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹브라우저 마다 기본적인 css는 적용이 되어있음.
- 그래서, 웹브라우저 마다 모양이 다르게 보인다.
- 아래 내용은 기본 CSS 값으로 추천합니다.

## 3. 선택하는 법 (selector)

### 3.1. 태그 선택법

```css
태그 {
}
```

### 3. 2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스명 {
}
```

---

`<link rel="stylesheet" href="css/common.css">`

`outline-style: none;`
` 요소에 기본적으로 생기는 외곽선(outline)을 없애는 CSS 속성

```css
@charset "UTF-8"
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outline-style: none; */
}
```

`font-size: 1rem;`

- 웹 개발에서 폰트 크기를 유연하고 일관되게 설정할 때 아주 자주 쓰이는 단위

---

### 가운데 정렬(1)

`margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;`

### 가운데 정렬(2)

`margin: 0 auto;`

### 가로, 세로 정렬

- `align-items: center;` 세로 가운데 정렬
- `justify-content: center;` 가로 가운데 정렬

### 오른쪽

`display: flex;`

- 오른쪽
  `justify-content: space-between;`
- 여백 사이에 넣어서 오른쪽으로 정렬

---

### 3.3. 단계별 선택법

```css
태그 > 태그 > 태그 {
}
```

```css
.클래스 > 태그 > 태그 {
}
```

### 3.4. 범위 선택법

```css
태그 태그 {
}
```

```css
.클래스 태그 {
}
```

## 4. display 의 이해

### 4.1 display : block;

- 벽돌 처럼 한 영역을 모두 차지한다.
- 공간이 남더라도 절대로 양보하지 않음.
- div, ul, li, h1~h6, p 태그 등은 default로 block 이 적용되어짐.

### 📦 블록 요소(block element)의 특징

- 한 줄 전체를 차지함
- 다음 요소는 무조건 다음 줄로 내려감
- width는 기본적으로 100%
- 부모 요소 전체를 자동으로 차지
- height, margin, padding 모두 적용 가능

### 4.2 displaay : inline

- 글자처럼 한줄에 배치가 가능하다.
- 그러나, width, height 등이 적용안됨.
- img, span, b 태그 등은 default 로 inline 이 적용되어짐.

### 4.3 displaay : inline-blok;

- 글자처럼 한줄에 배치가 가능하다.
- 그러나, width, height 등이 적용됨.
- Enter 줄 내림 공백을 없애려면 font-size : 0 적용
- `float : left;`
  요소가 부모 요소 안에서 왼쪽으로 붙어 배치돼요.
- `overflow : hidden;`
  내용이 요소의 크기를 넘쳤을 때, 넘친 부분을 보이지 않게 잘라내는 속성
  float을 사용하면 부모 요소의 높이 계산에 영향을 줘서 레이아웃이 깨짐
  이럴 땐 clearfix 기법을 쓰거나, overflow: hidden;을 부모에 추가.

### 4.4.1 oberflow:hidden 으로 레이아웃 유지

````css
@charset "utf-8";
.box_wrap {
  display: block;
  border: 3px solid red;
  oberflow: hidden;
}

.box{
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.4 2 clearboth 클래스 만들어서 레이아웃 유지

```css
.box_wrap {
  display: block;
  border: 3px solid red;
  height: 100px;
}

.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

### 4.4.3 height 를 주어서 레이아웃 유지

```css
.box_wrap {
  display: block;
  border: 3px solid red;
  height: 100px;
}

.box {
  display: block;
  width: 50px;
  border: 3px solid blaxk;
  float: left;
}
```

### 4.5 display: none

- 화면에 내용을 안보이게 함.
- 실제로 태그가 없는 것처럼 작동함.
- js에서 태그를 찾아서 기능을 부여 못함.

`content`

- content: `"텍스트";` 일반 텍스트 추가
- content: `url('이미지.png');` 이미지 삽입 가능
- content: `attr(data-label);` HTML 속성값 가져오기
- content: `""; |내용 없이 스타일만 적용` (예: 장식용 요소)

<br>

- before: 선택한 요소 앞에 가상의 콘텐츠를 삽입
- after: 선택한 요소 뒤에 가상의 콘텐츠를 삽입

````

### 4.6 가능하면 flex 적극 도입

- https://studiomeal.com/archives/197 1분코딩

## 5. css 적용 우선 순위

### 5.1 태그 css 가 만약 중복이라면

- 1번 inline 스타일 시트는 가장 우선 적용이 된다.

- 2번 `작성 순서가 마지막에 것이 적용`된다.

- 3번 `클래스가 태그보다 우선순위가 높다`

- 4번 `클래스가 중복이라면 작성순서가 나중이 우선`

- 5번 `아이디id는 최우선권을 가진다`
  단, inline에겐 짐

- 6번 `단계 선택이 범위선택 보다 우선권 가짐`

```css
  <body>
    <style>
      ul > li > a {
        background-color: green;
      }
      ul a {
        background-color: red;
      }
    </style>

    <ul class="menu">
      <li><a href="*">HTML</a></li>
      <li><a href="*">CSS</a></li>
      <li><a href="*">JS</a></li>
    </ul>
```

---

'element.style' : 해당 HTML 요소에 직접 적용된 inline 스타일.

---

### 5.2 무조건 적용하기

`!important;`

### 5.3 우선 순위 정리

`태그 < 클래스 < 아이디 < 인라인`

- 랜더링 과정을 고려함.
  `태그 ==> 태그 구조 ==> 태그 css => 클래스 css ==> 인라인 css`

- 웹브라우저의 F12을 참조하자.

## 6. 글꼴 설정

- 반드시 글꼴 설정 후 작업이 진행 되어야 합니다.

- 글자의 종류와 글자 간의 간격, 행간의 간격, 글꼴의 크기 등이 너비, 높이 등의 단위가 됩니다.

-body 셋팅을 위한 자료임.

### 6.1. 글꼴 구하기

- 구글폰트(https://fonts.google.com/)

- 눈누(https://noonnu.cc/)

- 깃허브(https://github.com/orioncactus/pretendard)

- 아이콘폰트(https://fontawesome.com/icons)

### 6.2. 글꼴 활용하기

- css/common.css 참조

## 7. css 살펴고기

- margin (영역 바깥으로의 여백)
  - margin-top 은 오류가 발생할 수 있습니다.

`calc(460px - 50px)` 계산적용

## position 을 꼭 기억하자.

### 1. 내가 정확하게 px로 위치를 지정하고 싶다.

- 아래 처럼 할때 정말 주의하세요.
- 바깥 영역에 `position: relative`가 있어야 해요.

```css
position: absolute;
left: 0px;
top: 0px;
right: 0px;
bottom: 0px;
```

### 2. 내가 웹 브라우저에 특정 위치를 고정하고 싶다.

```css
position: fixed;
left: 0px;
top: 0px;
right: 0px;
bottom: 0px;
```

---

- 영역 가운데

```css
margin: 0 auto

display: flex;
justify-conents: center;
```

- 영역 안에 있는 내용 가운데

```css
.container {
  display: flex;
  justify-content: center; /* 가로 정렬 */
  align-items: center; /* 세로 정렬 */
}
```

## JS 코딩 좋은 위치

- 가장 좋은 자리는 html 이 완료되는 시점.

```js
// html 의 document 가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행
// 표준입니다.

// 첫 번째 이벤트: 윈도우가 완전히 로드되면 .wrap 요소를 출력
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
});

// 두 번째 이벤트: 윈도우가 완전히 로드되면 "안녕" 출력
window.addEventListener("load", function () {
  console.log("안녕");
});

// 세 번째 이벤트: DOMContentLoaded가 발생하면 "로딩완료" 출력
// html 만 로드완료를 체크합니다.
window.addEventListener("DOMContentLoaded", function () {
  console.log("로딩완료");
});
```

## 요소(Element) 선택법

```js
// DOM 만 완성하면 됩니다. 기준으로 코드르 진행함 //

window.addEventListener("DOMContentLoaded" function(){} );

` 우리가 원하는 요소(Element)를 선택하는 법? `

-Tag를 선택하고 싶어요. (Tag Element)
document.getElementsByTagName("태그이름");
document.getElementsByClassName("클래스이름");

- css 선택자를 이용해서 선택하고 싶어요. ( XSS Selector)
document.querySelector(".선택자");
document.querySelectorAll(".선택자");

- ID 선택자를 이용해서 선택하고 싶어요. (ID)
document.getElementById("아이디");
```

- 예제

```js
window.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  console.log(header);

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
});
```

## 다양한 이벤트의 이해

- 웹브라우저가 체크하는 변화를 `이벤트` 라고 함.
- 이벤트 작성법 3가지

### 1. 태그에 직접 이벤트 작성하기

```js
<header class="header" onclick="alert('안녕')"></header>
```

### 2. 요소에 속성으로 이벤트 작성하기

```js
const header = this.history.document.querySelector(".header");
header.onclick = function () {
  alert("반가워");
};
```

```js
// DOM이 완전히 로드되면 실행
window.addEventListener("DOMContentLoaded", function () {
  // .header 요소를 선택
  const header = document.querySelector(".header");

  // 클릭 시 알림창 띄우기
  header.onclick = function () {
    alert("반가워");
  };

  // 기타 요소들 콘솔에 출력
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
});
```

### 3. 요소에 이벤트 핸들러로 이벤트 작성하기(표준)

요소.addEventListener("이벤트",function(){});

```js
  const header = document.querySelector(".header");
  header.addEventListener("click", function () {
    alert("표준 반가워");
```

### 4. 활용빈도가 높은 `윈도우 이벤트`

- `load` : 모든 리소스 (이미지, CSS 등 포함) 가 로드되었을 때 발생

- `DOMContentsLoaded` : DOM이 완전히 준비되었을 때 발생 (이미지 등은 아직 로딩 중일 수 있음)

- `resize` : 웹브라우저 너비, 높이 변경시 발생

- `scroll` : 웹브라우저에 스크롤이 일어나면 발생

### 5. 활용빈도가 높은 `마우스 이벤트`

- `click` : 마우스 클릭(왼쪽)
- `mouseenter` : 마우스 커서가 요소에 걸쳐지면
- `mouseleave` : 마우스 커서가 요소에서 벗어나면

### 6. 활용빈도가 높은 `키보드 이벤트`

- `keyup` : 키보드에서 키 입력 후 이벤트
- `keydown` : 키보드에서 키 입력시 이벤트
- `keypress` : 키보드에서 키 누르고 있으면 이벤트

### 7. 활용빈도가 높은 `Form 관련 이벤트`

## css 제어법

### 1. inline 형태로 적용하기(가끔 활용)

- `대상.style.css속성 = "값"`

### 2. css 클래스 활용하기 (적극 활용)

## 슬라이드 외부 라이브러리 활용하기

- 절대로 직접 만들지 마세요.
- `Swiper` : 가장 추천 (https://swiperjs.com)
- `Slick` : 추천 (https://kenwheeler.github.io/slick)
- `bxSlide` : 비추천 (https://bxslider.com)
