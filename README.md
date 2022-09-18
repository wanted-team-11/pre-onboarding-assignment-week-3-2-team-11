# 원티드 프리온보딩 6차 3주차-2번 과제

> 목표 : API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
## 💡 11팀

> 참여 인원 (이미지 클릭시 개인 레포지토리로 이동)

| [<img src="https://avatars.githubusercontent.com/u/16061038?v=4" width="120px" /> ](https://www.github.com/GUGIG) | [<img src="https://avatars.githubusercontent.com/u/62875596?v=4" width="120px" /> ](https://www.github.com/dlsxody1) | [<img src="https://avatars.githubusercontent.com/u/57490711?v=4" width="120px" /> ](https://www.github.com/gkdfo40) | [<img src="https://avatars.githubusercontent.com/u/97019802?v=4" width="120px" /> ](https://www.github.com/hjpark625) | [<img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="120px" /> ](https://www.github.com/ggsno) | [<img src="https://avatars.githubusercontent.com/u/111843724?v=4" width="120px" /> ](https://www.github.com/lee12779) | [<img src="https://avatars.githubusercontent.com/u/66675699?v=4" width="120px" /> ](https://www.github.com/happyeveryone96) | [<img src="https://avatars.githubusercontent.com/u/62886997?v=4" width="120px" />](https://www.github.com/HyunSeungBeom) |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **[팀장]정재훈**                                                                                                  | **김인태**                                                                                                           | **김항래**                                                                                                          | **박희주**                                                                                                            | **오강산**                                                                                                        | **이미란**                                                                                                            | **정진우**                                                                                                                  | **현승범**                                                                                                               |

---

> 역할

| 이름                                | 역할                        |
| ----------------------------------- | --------------------------- |
| **정재훈** , **김인태** ,**이미란** | 게시물 작성, 수정           |
| **오강산** , **정진우** ,**박희주** | comment list component 구현 |
| **김항래**, **현승범**              | pagination component 구현   |

<br />
<br />

## 🌈 실행 방법

    $ git clone https://github.com/wanted-team-11/pre-onboarding-assignment-week-3-2-team-11.git
    $ cd pre-onboarding-assignment-week-3-2-team-11
    $ npm install
    $ npm start

<br />
<br />

---

## ⭐ 배포 링크

<br />

> 배포링크

<br />
<br />

---

## 📚 기술스택

<br />

![react](https://img.shields.io/badge/react-18.0.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/typescript-4.8.3-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.5-DB7093?logo=styledcomponents)
![axios](https://img.shields.io/badge/axios-0.27.2-5E22D6)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.3.0-blue?logo=react-router)
![redux](https://img.shields.io/badge/redux--toolkit-1.8.5-764ABC?logo=Redux)
![React-Redux](https://img.shields.io/badge/react--redux-7.2.8-764ABC?logo=redux)

- 선정 이유

  - TypeScript
    - 정적 타입 지원하므로 컴파일 단계에서 오류를 사전에 포착할 수 있으며 이를 통해 미리 디버깅이 가능
  - Styled-Components
    - CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동적으로 생성하기에 코드 경량화에 효과적
    - 컴포넌트 기반 개발 방법에 적합하고 가장 많이 사용되는 CSS-in-JS 라이브러리
    - JS 상수와 함수를 쉽게 공유하여 props를 활용한 조건부 렌더링에 용이
    - 컴포넌트화하여 재활용 가능
  - Axios
    - Request와 Reply를 JSON 형태로 자동 변경
    - instance를 제작하여 fetchAPI보다 가독성 높은 코드를 작성 가능
    - fetchAPI와 차이점으로 fetchAPI는 요청 후 Promise로 JSON형태로 변환을 해야하지만 axios는 애초에 JSON으로 응답을 해줘서 간결한 코드 작성이 가능
  - React-Router-Dom
    - React의 SPA(Single Page Application)특성상 하나의 페이지(HTML)에서 모든 렌더링이 이루어짐
    - React의 이러한 강점을 활용하기 위해 페이지의 로딩없이 페이지에 필요한 컴포넌트를 렌더링 하기 위해 사용
  - Redux-Toolkit
    - Redux thunk가 내장되어 있어 비동기를 지원
    - action type이나 action creator를 따로 생성해주지 않아도 됨
    - Redux-Toolkit은 기존 Redux의 단점으로 꼽히는 보일러플레이트 코드가 줄어듦
    - 많은 라이브러리들이 내장되어 있어서 라이브러리들의 의존성을 줄일 수 있음
  - React-Redux
    - 컴포넌트의 상태 업데이트 관련 로직을 다른파일로 분리시켜 효율적으로 관리하기 위함
    - Redux는 모든 자바스크립트 프레임워크와 라이브러리에서 구동이 가능하지만 React에 최적화 되어있지는 않음
    - React에서 보다 효과적으로 Redux를 활용하고자함

<br />
<br />

---

## 📁 폴더 구조

    root
    |-- tsconfig.json
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- .gitignore
    |-- data.json
    |-- .husky
    |-- public
    |   |-- index.html
    |-- src
        |-- components
            |-- CommentList.tsx
            |-- Form.tsx
            |-- Pagination.tsx
        |-- containers
            |-- CommentListContainer.tsx
            |-- FormContainer.tsx
            |-- PageListContainer.tsx
        |-- pages
            |-- CommentsPage.tsx
        |-- services
        |-- store
            |-- comments.reducer.ts
            |-- form.reducer.ts
            |-- index.ts
        |-- App.tsx
        |-- index.tsx
        |-- types.ts

---

## ✅ 참고 사항

- API

  - 프로젝트내에서 npm install 후, npm run api 실행 시 localhost:4000 에 API 서버 실행
  - http://localhost:4000/comments에 GET 요청시 data.json 파일에 기록
  - API 를 통해 입력하거나 수정하면 data.json 파일내용도 변경됨
  - 총 댓글수는 `/comments` API로 호출 후 응답값을 통해서 직접 계산.
  - 서버는 json-server 라이브러리 이용해서 구축됨
    - API 사용법에 대한 추가정보는 공식문서 참고: [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
      | method | url |
      | ------ | --------------------- |
      | GET | /comments |
      | GET | /comments/{commentId} |
      | POST | /comments |
      | PUT | /comments/{commentId} |
      | DELETE | /comments/{commentId} |
  - API 호출 예시:
    - 한페이지에 4개의 게시물이 보이고, 최근 게시물부터 정렬해서 3페이지를 보고 싶은 경우
    - GET `/comments?_page=3&_limit=4&_order=desc&_sort=id`

- Redux 환경설정은 자유롭게 진행

  - Redux-saga or Redux-thunk 자유롭게 선택 가능
  - 미들웨어 사용안하는 것도 가능

- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수
  <br/>

---

## 📝 구현 기능

  <br />

1. 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
   <이미지>
2. 페이지네이션
   <이미지>
3. 댓글 작성, 수정, 삭제 후 동작
   - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
   - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
   - 삭제하고 난 뒤: 1페이지로 이동
     <이미지>

---

## 🙏 Commit Convention

|   Type   | Description                   |
| :------: | ----------------------------- |
|   feat   | Add a new feature             |
|   fix    | Fix the bug                   |
|  design  | UI design changes such as CSS |
|  style   | code formatting               |
| refactor | Refactoring the code          |
|   docs   | Modify the document           |
|  chore   | etc.                          |
