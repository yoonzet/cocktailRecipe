# 칵테일 레시피🍹

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

the cocktail db API를 호출하여 데이터를 시각적으로 구현했습니다.

<라이브러리>
Framer-motion으로 칵테일리스트와 랜덤칵테일버튼의 애니매이션표현
Recoil 라이브러리를 이용한 상태관리
styled-component 로 Css in JS 스타일링
반응형 웹사이트로 제작하였습니다.

<홈>

1. 칵테일 검색창 구현 -칵테일 이름 검색시 하단에 출력. 클릭시 디테일페이지로 이동
2. 메뉴 필터링 구현
   인기메뉴를 토대로 알코올과 논알코올로 필터링하여 버튼으로 구현함.
3. 좋아요버튼 구현 -이미지 우측상단의 하트아이콘을 누르면 보관함으로 저장이됨. (로컬 스토리지를 통하여 저장) -토글기능을 이용하여 추가/삭제 가능

<둘러보기>

1. 랜덤 칵테일 구현 -버튼을 누를시 랜덤으로 칵테일 출력 -하트아이콘 클릭시 보관함과 연동 -레시피 보러가기클릭시 디테일페이지로 이동
2. 재료 카테고리 -각 재료 클릭시 관련 카테고리로 이동

<보관함> -하트아이콘클릭시 보관함에 리스트로 생성. 아이콘을 한번 더 누르면 삭제 가능 -이미 저장이된 칵테일은 중복으로 저장되지 않음

<디테일페이지>
디테일페이지 내 좋아요 구현 -칵테일 별 레시피 제공
