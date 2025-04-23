# git add .

git commit

git branch 이름
git switch 이름

---

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

### 1. 태그 선택법

```css
태그 {
}
```

### 2. 클래스 선택법

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
