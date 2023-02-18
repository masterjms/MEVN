<template>
    <nav>
      <router-link :to="{ name: 'Home' }" class="logo"><span class="material-icons">eco</span></router-link> // name이 Home라우트로 이동한다는 것을 바인딩
      <router-link :to="{ name: 'Todo' }">할 일</router-link>
    </nav>
    <router-view /> // 현재의 라우트에 해당하는 페이지를 보여주게 해준다. 
  </template>
  
  <script>
    export default {
      name: 'App'
    }
  </script>
  
  <style>
    @font-face {
      font-family: "nanumburi";
      src: url("assets/MaruBuri-Regular.woff2") format("woff2");
    }
    body {
      font-family: "nanumburi";
      margin: 0 auto;
      padding: 0;
    }
    nav {
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      padding: 10px;
      text-align: center;
      box-sizing: border-box;
    }
    a {
      text-decoration: none;
      color: white;
    }
    .logo {
      float: left;
      width: 0;
    }
  </style>