# css 정리

## 1. 추천 라이브러리(팀에서 협의)

- reset.css
- normalize.css

https://meyerweb.com/eric/tools/css/reset/
https://necolas.github.io/normalize.css/

- normalize 예시 // 무조건 제일 위에
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">

## 2. 개선사항

- header.css 는 무조건 z-index: 999 이상
- header 영역이 스크롤시 `postion:fixed 되면서 높이가 반영안됨.`

```
margin-top의 오류라고 해서 유명합니다.
이런 경우 padding-top 또는 테두리를 주어서 해결합니다.
```

- header 영역이 스크롤시 `postion:fixed 되면서 높이가 반영안됨.`

```
position:fixed 라고 셋팅하면 높이값이 반영이 안됩니다.
강제로 main 영역의 상단에 공간을 padding-top으로 적용 해결.
```

- 배너 슬라이든느 단방향이라서, 즉 무한루프 가 아니라서 버튼 출력이 수정 필요.

## 3. CSS 자동 정리 도구 활용

- 필수 사항은 아닙니다.

- PostCSS Sorting 설치

```js
"postcssSorting.config": {
    "order": [
      "custom-properties",
      "dollar-variables",
      "at-variables",
      {
        "type": "at-rule",
        "name": "extend"
      },
      {
        "type": "at-rule",
        "name": "include"
      },
      "declarations",
      {
        "type": "at-rule",
        "name": "media"
      },
      "rules"
    ],
    "properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      "display",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "order",

      "float",
      "clear",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "padding",
      "overflow",
      "overflow-x",
      "overflow-y",

      "font",
      "font-family",
      "font-size",
      "font-weight",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-decoration",
      "text-transform",
      "color",

      "background",
      "background-color",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",

      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-radius",

      "box-shadow",
      "opacity",
      "transition",
      "transform",

      "cursor",
      "visibility",
      "content"
    ],
    "unspecified-properties-position": "bottom"
  }
```

- 단축키 설정하기 : 설정 > keyboard short cuts 선택
- 검색어로 `postCss Sorting: Run` 선택 : Shift + Alt + P

## 4. 반응형 작업

### 4.1. 필수 체크 사항

- 아래 구문이 없으면 화면 체크를 못해서 반응형 곤란

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- 포토샵 또는 Figma 로 디자인 제공되어짐(PC, 타블렛, 모바일)
- 가능 하면 큰 화면에서 모두 배치하고, 점점 줄여가면서 배치하기를 권장
- 필요하면 작업하면서 계속 @media 를 추가해 갑니다.

```css
/* 최대 크기 */
@media all and (max-width: 1280px) {
}
@media all and (max-width: 1024px) {
}
@media all and (max-width: 960px) {
}
@media all and (max-width: 760px) {
}
@media all and (max-width: 540px) {
}
```

### 4.2. 작업시 참조

- `웹브라우저 F12 번`을 활용한다.
- Dock 위치를 조절`하거나 아니면`디바이스 아이콘`으로 화면을 띄우고 진행

### 4.3. css 작업

- layout 클래스를 작업

```css
/* 반응형 작업 */
@media all and (max-width: 1280px) {
  .layout {
    max-width: 1024px;
    background-color: red;
  }
}
@media all and (max-width: 1024px) {
  .layout {
    max-width: 760px;
    background-color: hotpink;
  }
}

@media all and (max-width: 760px) {
  .layout {
    max-width: 100%;
    background-color: yellow;
  }
}
```

- header 영역 css 작업
- header 와 반응형 header 를 분리해서 만들면 편하다.

## 5. 자연스러운 반응형 계산법

- - 예제) PC 디자인 영역 너비가 1280px 이다.
  - 특정 영역의 너비가 650px, 높이가 400px 이다.
  - 자연스러운 너비, 높이 를 적용한다면?

- 정리
- max-width: 650px, max-height: 400px
  - `영역너비(650px) / 디자인 전체 영역 너비 (1280px) \* 100 = 결과 vw`
  - `영역높이(400px) / 디자인 전체 영역 너비 (1280px) \* 100 = 결과 vw`

```html
<!--자연스러운 반응형 계산법-->
<div class="box_wrap">
  <div class="box">내용</div>
</div>
<!--자연스러운 반응형 계산법-->
```

```css
/* 자연스러운 반응형 계산법 */
.box_wrap {
  background-color: hotpink;
  margin: 0 auto;
}

.box {
  position: relative;
  max-width: 650px;
  width: 50.78vw;
  max-height: 400px;
  height: 31.25vw;
  background-color: yellowgreen;
}
```

## 6. 안내창 만들기

```html
<!-- 안내창 -->
<div class="popup">
  <div class="popup_content">내용</div>
</div>
<!-- 안내창 -->
```

```css
.popup {
  top: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999999;
}

.popup_content {
  position: relative;
  max-width: 650px;
  width: 50.78vw;
  max-height: 400px;
  height: 31.25vw;
  background-color: yellowgreen;
  margin: 0 auto;
}
```

# scss 셋팅

-VSCode에서 설치 : `Live Sass Compiler`

- 실습
  - css폴더 / `test.scss 파일`생성
  - VSCode 하단에 watch Sass를 클릭
