// 홈과 할일 라우터 2개가 존재하는데 이를 전체적으로 관리하는 라우터

import homeRoute from "./homeRoute.js"
import todoRoute from "./todoRoute.js"
import {
    createWebHistory,
    createRouter
} from "vue-router"
const routes = [
    ...homeRoute, ...todoRoute // 구조분해 - 배열이나 객체 하나하나를 각각의 다른 변수로 나누어 분해하는것. 홈과 할일 라우트를 합쳐서 관리.
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router