# nodeJS_CRUD
## 항해3주차 node입문

#### 구현기능
1. 전체 게시글 목록 조회
  제목, 작성자명, 작성날짜 조회
  작성날짜 기준 내림차순
  특정 게시글 클릭 => 상세페이지

2. 글쓰기 페이지
  제목, 작성자명, 비밀번호, 작성내용입력
  글쓰기 버튼 클릭 => 목록페이지
  
3. 게시글 상세페이지
  제목, 작성자명, 작성날짜, 작성내용 조회
  
4. 수정, 삭제
  수정, 삭제버튼클릭시 비밀번호 확인후 페이지 이동 또는 삭제

#### 개발스택
|분류|내용|
|----|----|
|프론트|부트스트랩|
|백엔드|node.js|
|프레임워크|express|
|DB|mongoDB|
|라이브러리|mongoose, jquery|

#### 정리해야 할 개념
##### Mongoose 
- MongoDB ODM중 유명한 라이브러리이다. 
   =>ODM ? Object Document Mapping의 약자로 객체와 문서를 1대1로 매칭, MongoDB에 있는 데이터를 node에서 JS객체로 사용할수 있게 해준다.
- 데이터베이스 연결, 스키마 정의, 스키마에서 모델로 변환, 모델을 이용해 데이터를 다룬다.
- 프로미스와 콜백을 사용가능하다.

- Mongoose사용
 1. 연결
   <img width="426" alt="스크린샷 2021-11-19 오후 1 00 02" src="https://user-images.githubusercontent.com/80023108/142562714-e041f8b7-5ada-4b2f-9728-528db4fc8810.png">

2. 스키마 생성 : MongoDB는 스키마가 없지만 Mongoose에서는 스키마를 정의할 수 있다. 컬렉션의 각 필드를 정의해주는 객체
   <img width="853" alt="스크린샷 2021-11-19 오후 1 02 58" src="https://user-images.githubusercontent.com/80023108/142562922-7fae0e49-8b66-49e1-b482-3d93c6831943.png">

3. 모델 생성 : 스키마를 사용하여 만든 인스턴스로 데이터 베이스에서 실제 작업을 처리 할 수 있는 함수들을 지니고 있는 객체
   <img width="373" alt="스크린샷 2021-11-19 오후 1 05 29" src="https://user-images.githubusercontent.com/80023108/142563107-8e0eb86c-69d4-4aa3-a00c-e8cf440204a8.png">


4. 넘어온 데이터 DB에 저장

   <img width="360" alt="스크린샷 2021-11-19 오후 1 08 20" src="https://user-images.githubusercontent.com/80023108/142563364-45792700-8912-4ccc-bda2-e29f12f98639.png">

참고문서 : https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

##### 디렉토리구조

- app.js(index.js || server.js) : 핵심 서버 스크립트
- public : 외부에서 접근 가능한 파일들(정적파일, 이미지, css등등)
- views : 템플릿 파일
- routes : 서버의 라우트(경로)와 로직
- models : 데이터베이스 연결

##### npm
NodePackageManager의 약어로 패키지를 관리하는 작업을 안전하게, 자동화 할 수 있게 해주는 도구

- 패키지는 라이브러리와 비슷한 개념이다. 라이브러리는 코드의 모음이고, 패키지는 코드의 배포를 위해 사용되는 코드 모음이다.
- 패키지 : 코드의 배포를 위해 사용 되는 코드의 묶음
- 패키지 관리 : 패키지를 설치, 업데이트, 수정, 삭제하는 작업
