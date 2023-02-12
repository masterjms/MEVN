<template> 
  <ImgSlider :option="option" /> // setup안에 option 이라는 data를 정의하고 return함. setup안에 data함수등을 정의하고 return하여 다른 모듈에서 import해 쓸 수 있도록함.
</template> // :option = "option"을 통해 바인딩 // :는 v-bind의 숏컷.

<script>
  import ImgSlider from './components/ImgSlider' // 만들어 놓은 option을 ImgSlider컨포넌트로 import
  const BASE = `http://127.0.0.1:12010/img/`
  export default {
    name: 'App',
    components: {
      ImgSlider
    },
    setup() {
      const option = {
        list: [{
            "src": `${BASE}/1.jpg`,
            "name": "노을이 지고 난 후의 고성",
            "id": 1
          },
          {
            "src": `${BASE}/2.jpg`,
            "name": "힘들어지쳐 쓰러진 나.",
            "id": 2
          },
          {
            "src": `${BASE}/3.jpg`,
            "name": "카페에서 행복한 나",
            "id": 3
          }
        ],
        height: 450,
        width: 800
      }
      return {
        option
      }
    }
  }
</script>

<style>
@font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  #app {
    font-family: 'MaruBuri-Regular'; 
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
