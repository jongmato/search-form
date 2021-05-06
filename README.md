# 검색 폼 구현하기

## vanillaJS와 React.js로 각각 구현한 검색 폼 
- js, react 연습용으로 검색폼 을 구현했습니다.

## 폴더 구조
- index.html : 메인 파일 css, js를 받아와 화면에 렌더링 해준다.
- style.css : 스타일을 지정한 파일 
- js 폴더 : 자바스크립트 파일 
    - storage.js : 앱에서 사용되는 모든 데이터가 들어있는 파일
    - Store.js : storage객체를 받아와서 내부 변수로 저장하는 역할
    - Controller.js : store와 views를 받아와 내부 면수로 저장하는 역할
    - main.js : main 함수로서 DOM이 로딩 완료되면 main함수 호출 - store 생성, view 생성 store와 view를 사용해서 controller 함수의 생성자로 넣어준다. 
    - helpers.js : DOM API를 래핑 해놓은 파일
    - views : View 파일 (화면)
        - View.js : 모든 view 파일들이 공통으로 사용하는 부모 클래스 파일
        - SearchFormView.js : 검색폼 화면을 구성하는 파일 
            - 요구사항
            ● 검색 상품명 입력 폼이 위치한다
            ● 검색어를 입력하면 x버튼이 보이고, 없으면 x 버튼을 숨긴다
            ● 엔터를 입력하면 검색 결과가 보인다
            ● x 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다


npx lite-server --baseDir search-form-js/  
- npx : node로 만든 모듈을 바로 실행해 주는 명령어
- lite-server : node 모듈로 html 또는 javascript의 변경을 감지하고, socket을 이용하여 css변경을 주입하는 등의 기능을 제공하는 가벼운 노드 서버
- --baseDir search-form-js/ : 기준이 되는 폴더를 search-form-js로 지정해주는 옵션이다 