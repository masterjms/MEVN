<template>
    <div class="todo">
      <p class="header-title" @click="setSaying()"><span>{{newSaying}}</span></p> // setSaying태그 클릭에 setSaying함수가 호출. 새로운 명언을 불러옴.
      <p class="header-day">{{today}}</p>
      <div class="input-box">
        <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo"> // v-on 엔터 이벤트로 엔터를 누를 때 addTodo가 실행. 새로운 할일을 추가하는 함수와 newTodo함수를 핸들러로 설정하여. text태그에 글을 쓰면 자동적으로 newTodo가 변경됨. v-model 디렉티브는 input이나 text area의 양방향 바인딩을 생성하는데 사용.
      </div>
      <p class="title-desc">{{todos.length}}개가 남다.</p>
      <ul>
        <Card v-for="todo in todos" :key="todo.id" :todo="todo" @delete="removeTodo" @change="changeTodo" /> // 카드 컴포넌트로 할일을 넣어서 리스트로 만듬. 배열 바인딩의 경우 항상 key=todo.id로 유니크한 키값을 주어야함.
      </ul> // todo라는 변수를 todo에 바인딩하여 props로 넘김. @delete, change를 통해 자식 컴포넌트에서 오는 delete와 change이벤트에 removeTodo와 changeTodo함수가 실행되도록 함.
    </div>
  </template>
  
  <script>
    import Card from '../components/Card'
    import {
      onMounted
    } from 'vue'
    import {
      getDate
    } from '../utils'
    import useTodos from "../hooks/useTodos"
    import useSaying from "../hooks/useSaying"
    export default {
      name: 'Todo',
      components: {
        Card
      },
      setup() {
        const {
          todos,
          addTodo,
          removeTodo,
          newTodo,
          changeTodo
        } = useTodos() // useTodos라는 커스텀 훅에서 모든것을 관리하고 컴포넌트에서는 해당되는 모듈만 불러와서 사용가능.
        const {
          setSaying,
          newSaying
        } = useSaying()
        onMounted(() => {
          setSaying()
        })
        const today = getDate();
        return {
          todos,
          addTodo,
          removeTodo,
          newTodo,
          setSaying,
          newSaying,
          today,
          changeTodo
        };
      }
    }
  </script>
  
  <style>
    .header-title:hover {
      cursor: pointer;
    }
    .header-title {
      text-align: center;
      height: 200px;
    }
    .header-title span {
      background-position-y: 0%;
      background-image: linear-gradient(white 50%, gold 50%);
      transition: background .5s ease;
      background-size: 2px;
      background-size: auto 175%;
    }
    .header-title span:hover {
      background-position-y: 100%;
    }
    .header-day {
      text-align: center;
      color: #eb596e;
    }
    .placeholder {
      width: 100%;
      height: 80px;
      background: #aaa;
      border-radius: 10px;
    }
    .title-desc {
      color: #aaa;
      text-align: right;
    }
    .todo {
      width: 500px;
      margin: 0 auto;
    }
    .input-box>input {
      max-height: 32px;
      flex: 1 1 auto;
      line-height: 20px;
      padding: 8px 0;
      max-width: 100%;
      min-width: 0;
      width: 100%;
      background-color: transparent;
      border-style: none;
      font-family: "nanumburi";
    }
    .input-box {
      position: relative;
      transition: background .3s cubic-bezier(.25, .8, .5, 1);
      display: flex;
      margin-bottom: 8px;
      min-height: inherit;
      position: relative;
    }
    .input-box>input:focus {
      outline: none;
    }
    .input-box::before {
      bottom: -1px;
      content: "";
      left: 0;
      position: absolute;
      -webkit-transition: .3s cubic-bezier(.25, .8, .5, 1);
      transition: .3s cubic-bezier(.25, .8, .5, 1);
      width: 100%;
      border-style: solid;
      border-width: thin 0 0;
      border-color: rgba(0, 0, 0, .42);
    }
    .input-box:focus .input-box::before {
      border-color: red;
    }
    li>span {
      vertical-align: middle;
      display: inline-block;
    }
    li>span>input {
      position: relative;
      top: 1.3px;
    }
    ul {
      padding: 0;
      margin: 0 auto;
    }
    li {
      list-style: none;
      padding: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      margin-bottom: 20px;
    }
    li:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .desc {
      float: right;
      position: relative;
      top: 0px;
      color: #eb596e;
    }
    .desc:hover,
    .checkbox:hover {
      cursor: pointer;
    }
  </style>