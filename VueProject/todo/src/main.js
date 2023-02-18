import {
    createApp
} from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import store from './store' // vue에서 상태관리를 해주는것이 vuex이고 어플리케이션의 모든 컴포넌트들에 대한 중앙 집중식 저장소의 역할 및 관리를 담당한다. 컴포넌트간 데이터 교환을 할때마다 부모는 자식에게 props를 주고 자식은 부모에게 emit을 보내야하기 때문에 과정이 매우 복잡해진다.
// 데이터를 Store라는 곳을 통해서 관리하고 프로젝트에 존재하는 모든 컴포넌트들이 이 Store를 사용하는 것
import router from './router' // 머터리얼 디자인과 라우터를 사용함을 설정.

createApp(App) 
.use(router)
.use(store).mount('#app')

// main.js가 가장 최초로 실행되는 스크립트 파일이고 이 파일에서 App.vue를 호출하여 app을 생성한다.
// 이 파일에서 App.vue를 호출하여 createApp을 한 결과를 index.html에 있는 app id의 attribute에 할당한다.