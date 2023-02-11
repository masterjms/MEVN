// morgan이라는 모듈은 node.js 로깅 라이브러리로 http요청 로거에 사용된다.
// npm intall morgan

const express = require('express')
const app = express()
const loogger = require('morgan') // logger에 morgan 모듈의 함수를 담는다.
const PORT = 3000
// --- 1번로직
app.use(loogger('tiny')) // 함수에 매개변수 설정. tiny버전 : http메서드, url, 상태코드, 응답컨텐츠길이-응답헤더시작시간(ms)
app.use((req, res, next)=>{  
  console.log('1 Time:', Date.now())
  next()
})
app.use((req, res, next)=>{  
  console.log('2 Time:', Date.now())
  next()
})
// --- 2번 로직
 
app.listen(PORT, ()=>{
  console.log(`서버가 생성되었습니다.${PORT}`)
})

// 실행하면 로그가 나타난다. express를 이용하면 app.use매개변수로 로깅 미들웨어를 설정할 수 있다.
// GET / 404 139 - 6.343ms