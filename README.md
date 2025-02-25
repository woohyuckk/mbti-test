## ✨ MBTI_TEST PROJECT
![image](https://github.com/user-attachments/assets/e4e8f941-9cd6-4f84-a7a0-f8b34ed4fea3)

## 📢 프로젝트 소개
***MBTI TEST***는 20가지 질문을 통해서 간단한 MBTI 검사를 수행할 수 있는 웹사이트입니다.    
회원가입/로그인을 완료한 후 HOME의 ***테스트하러가기*** 버튼과 상단 헤더의 ***테스트*** 테스트를 실행할 수 있으며,    
테스트가 완료되면 ***결과보기*** 페이지에서 지난 검사결과를 확인할 수 있습니다.
결과보기 페이지에서는 다른 사람들의 결과 및 자신의 테스트결과를 확인 할 수 있으며 원치않으면 삭제, 또는 비공개처리가 가능합니다.
비공개처리를 하여도 자신에게는 결과가 보이게됩니다.

## 📅 프로젝트 기간
* 2025.02.20~2025.02.24

## ⚒ 기술스택

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <img src="https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> 

### ✅ **코드 품질 및 포맷팅**

- **ESLint**
- **Prettier**

## 📁 프로젝트 구조
```
📁 src
├── 📁 api
├── 📁 assets
├── 📁 commponents
├── 📁 constant
├── 📁 data
├── 📁 pages
├── 📁 shared
├── 📁 store
├── 📁 utils
├── 📄 App.jsx
└── 📄 index.css
```
### 📁api
회원가입과 테스트결과 저장을 위한 2가지 HTTP통신을 위한 API 함수들을 포함하였습니다.
> auth.js, testResults.js

### 📁components, page
전체 레이아웃 및 페이지별로 사용된 컴포넌트 분리및 공통 컴포넌트을 포함하였습니다.
```
├── 📁common
├── 📁layout
├── 📁profile
├── 📁results
├── 📁test
```
### 📁constants, data
프로젝트 내에서 사용되는 상수와 테스트 질문지를 포함하였습니다.
### 📁shared, store
> shared : Router, store : Auth 정보를 담은 전역상태관리 zustand
### 📁utils
> 📁hooks엔 tanstackQuery함수들을 로그인/테스트에 사용된 훅들을 포함하였습니다.   
> utils은 날짜형식 포멧팅, 회원가입 검증, MBTI 결과계산 로직을 담은 함수들을 포함하였습니다.


### 😡트러블 슈팅
[삭제버튼을 누르면 모든 데이터가 삭제되는 문제](https://forevero3o.tistory.com/43)
[언제 터질지 모르는 엑세스토큰 만료](https://forevero3o.tistory.com/44)


