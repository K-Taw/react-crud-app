# M-archive

M-archive는 다양한 관점에서 한국 영화 리뷰를 공유하고 소통할 수 있는 웹사이트입니다.

## 목차
- [프로젝트 설명](#프로젝트-설명)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)
- [기능 요구 사항](#기능-요구-사항)
- [API 명세서](#api-명세서)
- [기술 발표](#기술-발표)
- [테스트 문서](#테스트-문서)
- [팀 구성](#팀-구성)
- [라이선스](#라이선스)

## 프로젝트 설명
**프로젝트 기간:** 2023.03.13 - 2023.04.28

"M-archive"의 주요 목표는 사용자들이 한국 영화에 대한 리뷰를 공유하고, 다양한 의견을 나눌 수 있는 플랫폼을 제공하는 것입니다.

**프로젝트 링크:** [M-archive](#)

## 설치 방법
"M-archive"의 개발 환경을 설치하고 설정하는 방법에 대한 자세한 내용은 [서비스 메뉴얼](#)을 참고하세요.

## 사용 방법
M-archive 웹사이트는 사용자들에게 다음과 같은 기능을 제공합니다:
- 계정 생성 및 인증
- 영화 리뷰 작성
- 다른 사용자와의 댓글을 통한 상호작용

사용자 인터페이스 사용법에 대한 더 자세한 정보는 [화면정의서](#)를 참고하세요.

## 기능 요구 사항
이 프로젝트는 [사용자 요구사항 정의서](#)에 명시된 기능 요구 사항을 준수합니다.

## API 명세서
이 프로젝트에서 사용된 API는 [API 명세서](#)에 자세히 문서화되어 있습니다.

## 기술 발표
M-archive에서 사용된 아키텍처와 기술에 대한 설명은 [기술 발표](#)에서 확인할 수 있습니다.

## 테스트 문서
테스트 과정과 결과는 [테스트 문서](#)에 기록되어 있습니다.

## 팀 구성

| 팀원        | 역할       | 페이지                                  | 기능                                      |
| ----------  | ---------- | --------------------------------------- | ----------------------------------------- |
|  **김희환**  | 프론트엔드 | 마이페이지 고객센터                      | 아코디언, 문의 내역, 문의하기              |
|  **문상희**  | 프론트엔드 | 영화 상세 페이지, 서비스 LNB, 어드민 LNB, 검색창, 테이블 메뉴 구성 | 페이지네이션, 테이블 메뉴별 정렬           |
|  **서진주**  | 프론트엔드 | 메인 페이지, 마이페이지(프로필), 영화 상세 페이지, 리뷰 목록 페이지 | 프로필 설정, 퍼블릭 설정, 리뷰 및 댓글 CRUD, 라우터 설계 |
|  **임신영**  | 프론트엔드 | 메인 페이지, 로그인/로그아웃 페이지, 검색 페이지, 마이페이지(좋아요, 리뷰, 댓글) | JWT 인증 로그인, 무한 스크롤, 영화 검색 기능, 장르별 검색/정렬, 장르 태그 |
|  **조상우**  | 프론트엔드 | 시작 페이지, 관리자 페이지, 영화 관리 페이지, 리뷰 관리 페이지, 유저 관리 페이지, FAQ 페이지 | 토글, 체크박스, 좋아요 버튼, 공유 버튼      |


## 도구

### Communication
| Github | Discord | Notion |
| ------ | ------- | ------ |
| ![Github](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) | ![Discord](https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg) | ![Notion](https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg) |

### Front-end
| Html | SASS | JavaScript | React | Recoil | Axios | Prettier | esLint |
| ---- | ---- | ---------- | ----- | ------ | ----- | -------- | ------ |
| ![Html](https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg) | ![SASS](https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg) | ![JavaScript](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) | ![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) | ![Recoil](https://upload.wikimedia.org/wikipedia/commons/e/ef/Recoil.png) | ![Axios](https://axios-http.com/assets/logo.svg) | ![Prettier](https://prettier.io/icon.png) | ![esLint](https://eslint.org/assets/img/logo.svg) |

### Deployment
| AWS S3 | Github Actions |
| ------ | -------------- |
| ![AWS S3](https://upload.wikimedia.org/wikipedia/commons/0/05/Amazon_Web_Services_Logo.svg) | ![Github Actions](https://avatars.githubusercontent.com/u/44036562?s=200&v=4) |










## 라이선스
이 프로젝트는 GPLv3 라이선스 하에 있습니다.
