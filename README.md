# Header 영역 HTML 작업해 보기

우리가 매일 작업하는 내역은 분명 보관이 되어야 합니다.
그래서 업무 시작 시 항상 아래 단계로 진행합니다.

    1. git status
    ========================
    2. git add .
    3. git commit

# 기본 퍼블리싱 셋팅

## 1. Node.js 설치

- [설치](https://nodejs.org)
  - LTS 버전은 안정된 버전
  - 긍정적인 버튼을 선택해서 기본설치 하면 됨.
  - `추후 MVM ( Node Version Manager) 로 버전관리`
- Node.js 는 PC 환경에서 JS를 실행하도록 해줌
- Node.js 는 Server, DB, Clinent 프로그램 제작 지원

## 2. 기본 VScode 설치

- [설치](https://code.visualstudio.com/)

## 2.1. 퍼블리싱 추천 Ectension (플러그인)

```
- Auto Colse Tag
- Auto Rename Tag
- Bracket Pari Clor DLW
- CSS peak
- HTML CSS Support
- HTML to CSS autocompletion
- Image preview
- indent-rainbow
- Korean Language Pack for...(VSCode 재실행 후 확인)
- Live Server
- Markdown Preview Enhanced
- Material Icon Theme
- Night Owl (테마)
- prettier - Code formatter(별도참조)
```

### 2.2. Prettier 셋팅(코딩 컨벤션 도구)

- 파일 저장시 자동 정렬

```
- 관리 버튼 클릭 > 설정메뉴 선택 > Format On Save 검색
- Editor:Format On Save 체크 버튼 확인
```

- 기본 문서포맷도구 설정

```
- 관리 버튼 클릭 > 설정메뉴 선택 > Default Formatter 검색
- Prettier - Code formatte로 선택
```

### 2.3. Live Server 셋팅(일부 실행 오류 발견됨)

- 파악

# WAS(web Application Service)

## 1. 기본 추천 폴더 구조

- `프로젝트명/public 폴더` 생성
- `프로젝트명/public/images 폴더` 생성

```
jpg, png, gif, svg, webp(용량최소)
```

- `프로젝트명/public/css 폴더` 생성

```
common.css(공통적용), header.css, footer.css 등 영역별로 생성
```

- `프로젝트명/public/js 폴더` 생성

```
각 종류의 라이브러리.js, header.js, footer.js 등 영역별로 생성
```

- `프로젝트명/public/assets 폴더` 생성

```
프로젝트 관련 문서(회의록, 요구사항 명세서, 계약서 등), 디자인 및 멀티미디어 리소스 등
```

## 2. 홈 페이지 (index.html)

- 파일명 준수 (소문자 기준)
- '프로젝트명/public/index.himl 파일' 생성
- 키보드 단축키 활용 : `!탭`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

### 2.1. 기본 수정 사항

- 문서 기본 언어 수정

```html
<html lang=" ko">
  ...
</html>
```

- 문서 기본 타이틀 수정

```html
<title>서비스명</title>
```

### 2.2. body와 내용영역 구문 추천합니다.

```html
<body>
  <!-- 전체 레이아웃 -->
  <div></div>
</body>
```

### 2.3. 기본적으로 header, main, footer 를 구분하기를 원장합니다.

- 시멘틱태그 : 태그의 단어가 내용을 설명하는 역할을 말함.

```html
<body>
  <!-- 전체 레이아웃 -->
  <div>
    <!-- 문서 상단 -->
    <header></header>
    <!-- 문서 내용 -->
    <main></main>
    <!-- 문서 하단 -->
    <footer></footer>
  </div>
</body>
```

### 2.4. 위 구조 기본 작성 후 각 내용을 div 채그로 분할한다.

- 인터파크 사이트의 경우

```html
  <!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>mytil</title>
    </head>
    <body>
      <!-- 전체 레이아웃 -->
      <div>
        <!-- 상단 -->
        <header>
          <div></div>
        </header>
        <!-- 메인 -->
        <main>
          <div></div>
          <!-- event -->
          <div></div>
          <!-- tour -->
          <div></div>
          <!-- tirp -->
          <div></div>
          <!-- ticket -->
          <div></div>
          <!-- live -->
          <div></div>
        </main>
        </div>
        <!-- 하단 -->
        <footer>
          <div></div>
        </footer>
      </div>
    </body>
  </html>
```

# Git (버전 관리도구)

## 1. Git 관리

- 내 pc 에서 코딩 버전을 관리하는 도구 -[설치](https://git-scm.com/)
  -64-bit Git for windows Setup.

### 1.1. 설치확인 방법

- `윈도우 로고 + R 키 입력` > `cmd 로 터미널` 실행

```bash
git --version
```

### 1.2. VSCode 에서 Git 관리 하기

- 터미널 입력창을 Git Bash 로 셋팅해서 관리
- Git Bash를 선택한 이유는 Linux, Mac 운영체제의 터미널 사용

```
관리도구 버튼 > Settings > 입력창: default:Windows > Git Bash 선택
```

- 설정확인

```
VSCode 주메뉴 > Terminal > Terminal 보기 선택 후 > Bash 확인
```

### 1.3. 기본 저장소(Repository) 이름 설정하기

- 옛날에는 브랜치명이 master 라고 생성이 되었습니다. (노예라는 어감)
- 현대에는 브랜치명이 main 라고 생성하여야 합니다.

```bash
git config --global init.defaultBranch main
```

### 1.4. Enter 키에 의한 줄내림 통일하기(Linux, Mac, Window)

```bash
git config --global core.autocrlf true
```

### 1.5. git 명령어의 추가 내용 작성을 VSCode 로 하도록 설정

```bash
git config --global core.editor "code --wait"
```

### 1.6. 사용자 아이디 저장

```bash
git config --global uer.name "id"
git config --global uer.email "id@gmail.com"
```

## 2. Git 명령어 실행하기

- Git 프로젝트 관리 시작하기

```bash
git init
```

- Git의 현재 상태 알아내기

```bash
git status
```

- Git 에서 `파일 및 폴더 통째로 추적하기` 설정

```bash
git add.
```

- Git 작업내역 메모하기

```bash
git commit
```

- 새로운 작업단위, 즉 브랜치 생성하기

```bash
git branch header
git switch header
```

- 월요일 할거지롱.

## 3. GitHub 관리

[docs] 초기 프로젝트 환경 설정

- 폴더구성 및 index.html 초기 작성
- git 프로젝트 초기화

- GitHub : 웹 에서 나의 계정에 코딩 버전을 관리하는 도구

  1.d 내 pc 환경 셋팅

- Node.js 설치
- VsCode 설치
- VsCode Extenstion 들 설치
- VSCode 로 프로젝트 폴더 드래그 준비
- 프로젝트 폴더 > public 폴더
- 프로젝트 폴더 > public 폴더 / images 폴더
- 프로젝트 폴더 > public 폴더 /css 폴더
- 프로젝트 폴더 > public 폴더 / assets 폴더
- 프로젝트 폴더 > public 폴더 / index.html 파일
- 프로젝트 폴더 > README.md 파일 생성
- VSCode 에 터미널 창에서 git init 실행 (딱 한번만 실행하시면 됩니다)
- VSCode 에 터미널 창에서 git add . 실행 (모든 파일 추적 시작)
- 작업을 한참 진행...
- git add . ㅣ git staus > git commit ...작업내역 기록

---

`git branch -v`
명령어는 현재 로컬 저장소의 브랜치 목록과 각 브랜치의 마지막 커밋 정보를 간단히 보여줍니다.
<br>

`git switch main / git switch header / git switch layout`
지금 작업 중인 브랜치를 main / header / layout 브랜치로 전환합니다.

`git init`
Git 저장소를 새로 만드는 명령어
쉽게 말해, "이 폴더를 Git으로 관리할게!" 하고 선언하는 거예요.

`git branch -v`
로컬에 있는 브랜치 목록을 보여주면서,
각 브랜치의 최근 커밋 해시와 커밋 메시지도 함께 보여주는 명령어

---

git init
작업을 한다. 음..저장할까?
git add .
git commit 작업내역 기록

git switch header 이동.

git branch layout
git branch -v

git switch layout 이동.

---
