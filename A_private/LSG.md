- [x] Alt + Shift + 방향키 아래
- [x] Ctrl + B
- [x] Delete
- [x] Ctrl + ` 터미널
<div style="border: 2px solid gray; padding: 10px; border-radius: 5px;">
<br>
😀 웃음	😀 😄 😁 😂 🤣 😊 😆
<br>
😢 슬픔	😢 😭 😞 😔 😟
<br>
😡 화남	😠 😡 🤬
<br>
😍 사랑	😍 😘 💖 💕 💗 💓 ❤️
<br>
😎 멋짐	😎 😏 🤠
<br>
🙏 감사/부탁	🙏 🤲 🙇‍♂️ 🙇‍♀️
<br>
🎉 축하	🎉 🎊 🥳 🎈 🎂
<br>
👏 박수	👏 👏🏻 👏🏼 👏🏽 👏🏾 👏🏿
<br>
💪 힘!	💪 🔥 ✊ ⚡
<br>
💤 졸림	😪 😴 💤
<br>
🤔 생각 중	🤔 🧐 💭
<br>
🧠 공부/지식	🧠 📚 ✍️ 📝
<br>
🐶 동물	🐶 🐱 🐭 🐰 🐻 🦊 🐼
<br>
🍎 음식	🍎 🍕 🍔 🍟 🍩 🍫 🍓
<br>
🎮 게임	🎮 🕹️ 👾
<br>
🌞 날씨	☀️ 🌤️ ⛅ 🌧️ 🌈 ❄️
<br>
🌸 꽃 🌼💐🌺🌻🌹
<br>
<br>
</div>

---

# HTML

- 이름 짓기
  `<div class="hader">`
  `<div class="이름">`

- (예시) 헤더 안에 있는 top
  `<div class="header_top">`

---

- 이미지 넣기
  `<img src="images/nol-interpark-logo.svg" />`
  `<a href="http://www.interpark.com" target="_blank">`

---

- 이미지 자세하게

`<a href="http://www.interpark.com" target="_blank">
<img src="images/nol-interpark-logo.svg" alt="로고" title="인터파크" />`

### 설명

- href 속성
  링크를 클릭했을 때 이동할 주소 (여기선 인터파크 공식 웹사이트).

- target="\_blank"
  링크를 클릭하면 새 탭에서 열리도록 설정

- src
  이미지 파일의 경로

- alt="로고"
  이미지가 로드되지 않을 경우 대신 보여줄 텍스트. 웹 접근성에도 도움 됨.

- title="인터파크"
  이미지에 마우스를 올리면 툴팁으로 나타나는 텍스트

---

- 링크
  `<a href="주소">보여주는 이미지</a>`
  <a href="http://www.naver.com">로고</a>

- 새 탭으로 링크
  `<a href="주소" target="_blank">보여주는 이미지</a>`
  <a href="http://naver.com" target="_blank">로고</a>

---

- 사용자 입력을 받기 위한 양식
  `<FORM></FORM>`
  웹페이지에서 로그인, 회원가입, 검색창 같은 것들이 전부 `<form>` 태그 사용

- 사용자에게 데이터를 입력받는 가장 기본적인 태그
  `<input />`

- 입력창 안에 흐릿하게 보여주는 안내 문구
  `placeholder=""`

### 예시

`<input type="text" placeholder="검색어를 입력해 주세요" />`
<input type="text" placeholder="검색어를 입력해 주세요" />

---

<input type="button" value="검색" />
<input type="submit" value="검색" />

---

- `action=""`
<form> 태그 안에서 아주 중요한 속성
form이 제출될 때 데이터를 어떤 URL로 보낼지 정해주는 것

<br>

- `method="get"`
  서버에 어떻게 보낼지?

---

  <ol>
    <li><a href="#">로그인</a></li>
    <li><a href="#">회원가입</a></li>
  </ol>

- `<ul>`
  "Unordered List" = 순서 없는 목록
  (항목에 번호 없이 기호나 다른 스타일로 표시)

- `<li>`
  "List Item" = 목록 항목

- `<a href="#">`
  클릭 가능한 링크. 현재는 #이라 실제 이동은 없음

- `<a></a>`
  태그는 **링크(anchor)**를 만드는 HTML 태그
  웹 페이지에서 다른 페이지나 URL로 이동할 수 있는 클릭 가능한 링크를 만들 때 사용

---

# 다중편집

`태그*숫자`
`ctrl + D`

git add .
git commit

[docs] header 태그 완료
