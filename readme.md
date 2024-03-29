# 📣 실시간 모니터링 시스템을 만들며 정복하는 MEVN
## Node.js의 기본
### 비동기적 이벤트 주도 방식
- nodejs에서는 이벤트를 이벤트 큐에서 처리. 즉 A(10ms),B(3ms),C(8ms)의 요청이 있다면, nodejs는 이 세가지 요청을 하나의 스레드, 즉 싱글 스레드로 모두 이벤트 큐에 넣고 먼저 완료되는 
요청을 우선적으로 끄집어 내어 결과적으로 B,C,A의 순으로 결과가 나온다. 이처럼 큐에 넣고 이벤트를 처리하면서 완료되는 순서대로 요청을 처리하는 것이 비동기적 이벤트 주도 방식이다.<br>
### 논블로킹 I/O 모델
- 위의 비동기적 이벤트는 I/O모델에서 작동한다. 이는 I/O bound를 처리하는 모델로 fs, network, DB 작업을 일컫는다. 이에 해당하는 요청을 실행하는 동안 블로킹, 즉 중단되는 행위가
벌어지지 않는다. 예를 들어 사용자가 페이지에서 버튼을 클릭해서 파일을 다운로드 할때, 버튼을 클릭하고 파일을 다운로드하는 동안 페이지에 랙이 걸리는 등의 행위가 발생되는 않는다. 반대로
블로킹 I/O모델은 요청을 처리하는 동안 스레드를 점유하기 때문에 동시요청을 처리하기 위해 응답시간이 느려지거나 서버가 중단될 수 도 있다.
### 구글 V8 Engine
- 일처리하는 엔진. 크롬 등 많이 사용중임. JIT(just in time) 즉 프로그램을 실행하는 시점에서 기계어로 번역하는 컴파일 기법이란 특징이 있다.
### 자바스크립트 런타임
- 런타임이란 프로그램이 실행될때 프로그램이 머무는 공간을 의미. 브라우저가 자바스크립트의 런타임이기도 함. 브라우저 공간안에서 js 프로그램을 실행 가능하기 때문이다. 즉 자바스크립트로 
만든 게임, 알고리즘, 서버 등 많은 것을 실행할 수 있다.
### JSON의 기초
- {"이름" : "큰돌"} 이런 구조를 JSON Object라고 부른다.
- 문자열 -> 객체로 만들기 위해서는 JSON.parse
- 객체 -> 문자열로 만들기 위해서는 JSON.stringify<br>
<code>
let a = '{"이름":"큰돌"}'<br>
console.log(typeof a)<br>
// string<br>
console.log(a.이름)<br>
// 문자열 string이므로 undefinded<br>
a = JSON.parse(a)<br>
console.log(typeof a)<br>
// object<br>
console.log(a.이름)<br>
// 큰돌<br>
</code>

## Express로 서버구축 및 로거
### express?
- node.js에서 동작하는 웹 프레임워크 중 가장 많이 사용되며 유연하고 http유틸 함수를 이용해 api를 쉽고 빠르게 만들 수 있다.
- 미들웨어란 ? 톨게이트와 같다. 차선이 확장되기전 톨게이트를 거치는 것처럼 하나의 로직을 거침으로써 일일이 무언가를 설정하지 않아도 된다.
- 미들웨어는 어떤 로직 계층을 중간에 넣는 것으로 ,  3000번 서버로 요청했을 때 이하 로직이 실행되게 만든 것을 의미.

## Vue.js
### Vue-cli 서버 실행하는 법
- 모듈 설치 : npm install -g @vue/cli
- npm설치 : npm install 
- 서버 실행 : npm run serve
### SPA(single page application)
- 최초의 정적 리소스를 다운로드를 한번에 하고 새로운 페이지 요청 시 페이지 갱신에 필요한 데이터만을 전달받아 페이지를 갱신함.
- 즉 트레픽을 줄이고, 전체를 렌더링할 필요가 없으므로 UX가 향상되어 사용자 경험의 질이 높아짐.
- 단점으로는 모든 리소스를 최초에 다 다운로드하기 때문에 느릴 수 밖에 없음. 서버 사이드 렌더링이 아니므로 SEO에 불리하다.
- MVVM 디자인 패턴 : model, view, viewmodel로 이루어진 패턴
- 사용자가 보는 페이지, 데이터처리, 이들을 중간에서 제어하는 뷰모델

### virtual DOM, 데이터 중심 그리고 컴포넌트 기반
- vue.js에서는 뷰인스턴스로 관리하는 DOM에 대해 가상돔이라는 가상 객체를 만들어 기존의 DOM과 업데이트된 DOM을 매우 빠르게 비교해서 바꾸는 작업을 쉽게 한다.
- 양방향 바인딩을 적용하여 데이터 중심으로만 생각가능하다. 즉 데이터가 갱신되었을때 DOM이 알아서 갱신되거나, 입력폼등 DOM의 데이터가 갱신되어도 실제 데이터가 변경된다. <br>
💡 데이터 바인딩이란?  화면상에 보여지는 데이터(View)와 브라우저 메모리에 있는 데이터(Model)를 묶어서(Binding) 서로 간의 데이터를 동기화하는 것을 의미합니다. 예를 들어서 HTML에서 서버 혹은 스크립트상에서 받아온 데이터를 화면상에 그려주고 있다고 가정을 했을 때, 해당 값이 변경이 될 경우 다시 HTML 상에 데이터(값)를 변경된 값에 따라서 맞추어 주는 동작을 '데이터 바인딩'이라고 합니다.
- 뷰인스턴스 : vue가 DOM을 관리하도록 부리는 일꾼이다. vue 인스턴스로 관리할 특정 DOM을 설정할 수 있다.
- 컴포넌트 기반 : .vue 확장자로 이루어진 코드는 다음과 같다. template script style

### 라이프사이클과 composition API
- vue의 라이프 사이클은 다음과 같다. beforeCreate, created, beforeMount, mounted, beforeUpdated, beforeDestroy, destroyed
- created : 컴포넌트가 생성된 단계. DOM에 vue인스턴스가 붙지 않아서 주로 ajax요청으로 데티어를 fetch하는데 쓰인다.
- mounted : 컴포넌트 및 DOM에 인스턴스까지 붙은 상태. 부모 컨포넌트가 created된 후 자식 컴포넌트의 created, mounted 훅이 시작되고 이후 부모 컨포넌트의 mounted가 시작된다.
- composition API : vue.js 3.0 부터는 created, mounted 에서 setup, onMounted를 사용한다. 이를 사용하는 이유는 vue의 특징으로 컴포넌트 모듈을 객체형태로 선언하여 (props, data, methods, template, watch 등)책임소재를 분명히 한다. 이들이 모두 유기적으로 동작하기때문에 프로젝트 크기가 커지면 여기저기 점프를 하며 코드를 읽어야하는 일이 발생한다. 따라서 특정 기능과 관련된 변수와 메소드는 한곳에 모여있으면 가독성이 좋아지므로 composition API를 제공한다.
- Vue 3에서는 컴포넌트 객체에 setup 함수를 사용할 수 있다. ref 를 사용해서 반응형 변수로 data를, 보통의 자바스크립트 함수로 methods를 대체한다. 라이프사이클 메소드는 onMounted, onUpdated 같은 라이프사이클 훅 함수가 대신한다. 반응형 변수의 변경 탐지 역시 watch 함수로 구현 가능하며 계산된 값을 위한 computed 함수도 제공된다. 컴포넌트 객체애서 속성으로 분리되었던 기능 대부분이 setup 함수 안에서 사용 가능하다. 

### Vuex란 무엇인가?
- vue개발에서 상태를 관리해주는 기능을 제공하는 것이 vuex이고 어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를한다.
- vuex가 없다면 컴포넌트간의 데이터(상태)를 주고 받기 위해서 부모는 자식에서 props를 통해 전달하고, 자식은 부모에게 emit event를 통해 처리해야한다. 이는 굉장히 복잡한 작업이 된다.
- 이 문제를 해결해주는 것이 vuex이다. 데이터를 store이라는 곳을 통해서 관리하고 프로젝트에 존재하는 모든 컴포넌트들이 이 store를 사용하는 것.
- vuex의 핵심 구성 요소 : state, Mutations, Actions, Getters
- State(데이터 객체) : 공통으로 참조하기 위한 변수를 정의한것. 프로젝트의 모든 곳에서 이를 참조 가능하고 모든 컴포넌트들에서 공통된 값을 사용할 수 있다.
- Mutaions(동기형 state변경 처리기) : state변경을 담당. 반드시 mutations을 통해서만 state를 변경해야함. commit방식으로 호출. mutaions내에 함수를 작성.
- Actions(mutation 트리거) : mutation을 실행시키는 역할. 비동기 처리 기준이며 distpatch 방식으로 호출한다. 마찬가지로 actions 내에 함수를 작성. 비동기 기준이므로 콜백 함수로 작성.
- Getters(공통속성) : 각 컴포넌트의 계산된 속성(computed)의 공통 속성으로 정의. 여러 컴포넌트에서 동일한 computed가 사용될 경우 Getters에 정의해서 공통으로 사용가능. 하위 모듈의 Getters를 불러오기 위해서는 this.$store.getters['경로명/함수명']; 을 사용함.

## MongoDB - NoSQL
### MongoDB 와 BSON
- 스키마란? 데이터베이스를 구성하는 레코드의 크기, 키(key)의 정의, 레코드와 레코드의 관계, 검색 방법 등을 정의한 것.?MongoDB에서 스키마는 도큐먼트의 데이터 구조를 담고있다.
- mongoDB는 JSON 매개변수를 받아 Binary JSON 형태로 저장된다. 즉 JSON형태로 데이터 삽입, 수정, 조회하는 쿼리가 모두 가능하다.
- Node.js에서 MongoDB를 접근하는데 필요한 모듈에는 Mongoose, MongoDB 드라이버 2개가 있다.
- RDBMS(관계형데이터베이스)에서는 데이터베이스 - 테이블 - 데이터로 계층화되어 있다. 반면 MongoDB에서는 데이터베이스 - 컬렉션 - 도큐먼트로 계층화 되어 있다. 데이터라고 불리는 것이 document라고 mongoDB에서는 부른다.
### MongoDB Storage Engines
- 스토리지 엔진은 데이터 서버의 디스크에서 사용자가 요청한 데이터를 어떻게 가져오고 저장할지 결정한다.wiredTiger엔진은 LSM Tree라는 로그 기반 병합트리를 이용하여 읽기 성능을 포기하고 저장 기능을 향상시키고 느린 읽기 성능을 보완하기 위해 블룸 필터를 사용한 엔진이다.
### MongoDB에서의 transaction
- insert나 find와 같은 커리를 client에서 보내면 어떤 로직으로 처리하게 될것인가?
- 먼저 쿼리를 수행 전 journal log에 저장되는 저널링이 이루어진다. 쿼리 수행 실패시 롤백하기 위해서 로그를 남기는것이다.
- 동시에 Buffer Pool로 들어가 checkpoint, 즉 메모리 버퍼와 디스크 간의 데이터 불일치를 해소하기 위해 메모리 -> 디스크로 데이터를 동기화하는 작업이 일어난다. 즉 수정사항을 디스크에 반영시키는 것.
- 마지막으로 eviction, 메모리 버퍼에서 필요 없는 데이터들을 삭제하는 작업이 일어난다.
### MongoDB 특징
- document는 key와 value형태로 이루어져 있고, _id라는 고유한 아이디를 가진다. 또한 key의 길이도 내용으로 들어간다. JSON을 매개변수로 받아 BSON으로 DB에 삽입되기 때문에 type변환이 일어나지 않는다.
- 스키마없이 삽입이 가능하다. 스키마란 DB를 구성하는 속성, 관계 등 데이터 값이 갖는 type을 명시하는 것을 말한다. RDBMS의 경우 한 스키마가 int, char[14]인 경우 그 안에 들어가는 데이터인 18바이트만 저장되지만, 
mongoDB는 한개의 document로 칼럼 이름도 바이트에 추가된다. key-value형태로 들어가기 때문. 예를 들어 comments:string이란 type으로 정해놓고 DB에 저장한다면 comments라는 길이의 byte, 즉 8byte가 각각 더들어간다.
- MongoDB는 서버 이중화를 통해 운영서버가 멈추지 않도록 한다. ReplicaSet을 이용한다. 데이터 양이 많은 경우에는 collection을 분할해 관리한다.
- B-tree를 적용한 인덱싱을 사용한다. 인덱싱이란 무엇인가 찾을 때 사용된다. 인덱스는 B-tree로 구성되어 있고, 2차원 자표 인덱싱의 경우 R-tree로 구성되어 있다.
- transaction 과정에서 MongoDB의 buffer Pool이 서버 메모리의 50%를 차지한다.
- 데이터의 조합 함수를 지원한다. min, max, aggregate, mapReduce 등 데이터를 추출하고 조합해서 압축된 결괏값을 만들어 낼수 있다.
### MongoDB의 한계
- MongoDB의 저장 형식인 BSON document의 크기는 최대 16MB로 제한된다. 이때 BSON document의 깊이의 최대는 100lv까지 가능하며, 데이터베이스 name은 64자보다 작아야하며, 이또한 데이터에 포함되므로 이름도 짧게 해야한다.
### MongoDB의 기본적인 문법 - data base
1. 명령 프롬프트(터미널)에서 mongod 입력
2. 새로운 터미널 창을 켜서 mongo 입력
3. 새로운 데이터베이스 생성 : use sensor로 일단 데이터 베이스로 이동
4. show dbs로 어떤 데이터 베이스가 있는지 확인 
5. db.sensor.insert({"user":1})으로 데이터 베이스 추가
6. 이후 show dbs하면 sensor라는 베이스가 생겼을것.<br>
use를 통해 db로 이동한 다음 어떤 데이터를 삽입하기만 하면 db를 만들 수 있다.
### MongoDB의 기본적인 문법 2 - root user
1. db.createUser({user : 유저이름, pwd: 패스워드, roles : 권한})과 같은 형식으로 root유저를 만들어 절대 권한을 가지게 한다.
2. use admin을 통해 admin이라는 db로 이동하고 root유저를 생성.
3. db.createUser({user:"root", pwd: "root123", roles:["userAdminAnyDataBase"], mechanisms : ["SCRAM-SHA-1"]}) - 관리자로서 모든 데이터베이스에 접근 가능.
### MongoDBdml 기본적인 문법 3 - 일반유저 생성
sensor데이터베이스에 유저를 추가하기
1. use sensor
2. db.createUser({user:"minsung", pwd:"minsung1234", roles:["readWrite"], mechanisms: ["SCRAM-SHA-1"]})
### 유저관련 함수
- db.getUser() - 현재 db에 있는 유저의 목록을 출력
- db.dropUser("user") - 삭제
### MongoDB의 인덱싱
- DB는 B-Tree자료구조를 기본으로 인덱싱한다. 이진트리의 확장개념으로 2개의 자식 노드가 아닌 여러개의 자식을 가질 수 있다.
- db.users.createIndex({id : 1})이라고 하면 id를 오름차순으로 뽑아낸다. find를 이용해 users.find().sort({"id":1}).limit(100)이라고 할 수 있겠지만 훨씬 느릴것.
## D3.js
### 시각화 라이브러리
- D3는 임의의 데이터를 DOM에 바인딩한 다음 데이터 기반 시각화 변환을 적용할 수 있다. HTML테이블을 생성할 수 있고 바차트, 라인차트, 애니메이션, 상호작용 등 시각화 요소를 커스터마이징이 가능하다.
### SVG - scalable vector grapic
- vector 이미지 포맷을 가지고 있어 크기를 확대해서 깨지지 않는다. line, circle, ellipe, polygon 등을 만들 수 있으며, 데이터를 기반으로 그리는 차트에 쓰이는 path도 만들 수 있다.
### scale
- range : 데이터를 표시할 스케치북
- width : 스케치북의 크기
- scaleLinear : 선형적인 스케치북
- scale : 데이터의 간격에 맞게 그림을 그릴때 사용.
