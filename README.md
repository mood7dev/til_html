# git add .

git commit

git branch 이름
git switch 이름

타입 | 의미
feat | 새로운 기능 추가
fix | 버그 수정
docs | 문서 관련 변경 (README, 주석 등)
style | 코드 스타일 변경 (세미콜론, 들여쓰기 등), 기능 변화 없음
refactor | 코드 리팩토링 (동작은 같지만 구조 개선 등)
test | 테스트 코드 추가/수정
chore | 빌드, 설정, 패키지 매니저 관련 작업 등
perf | 성능 개선
ci | CI 관련 설정 변경 (GitHub Actions, Travis 등)
build | 빌드 시스템이나 외부 종속성 변경
revert | 이전 커밋 되돌림

# Header 영역 HTML 작업해 보기

우리가 매일 작업하는 내역은 분명 보관이 되어야 합니다.
그래서 업무 시작 시 항상 아래 단계로 진행합니다.

    1. git status
    ========================
    2. git add .
    3. git commit

git branch -v : branch 목록을 확인하고
git branch -D 브랜치 : branch 목록에서 layout 제거하기 무조건
git branch -d 브랜치 : mearge (브랜치들 하나로 합치기)

🔄 브랜치 관리
git branch # 브랜치 목록 보기
git branch <이름> # 브랜치 생성
git checkout <이름> # 브랜치 전환
git switch <이름> # 브랜치 전환 (추천)
git merge <브랜치> # 현재 브랜치에 다른 브랜치 병합
git branch -d <이름> # 브랜치 삭제
