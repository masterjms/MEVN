// 이 파일은 dist폴더 내에 있음을 가정함.

const express = require('express')
const path = require('path')
const logger = require('morgan') 
const app = express()
const PORT = 12010
const _path = path.join(__dirname, './dist') // --- (1) dist 폴더 안에 있는 파일들을 서버에 올린다. 사용자는 모든 dist 정적 파일에 접근이 가능. _dirname은 js가 실행되는 현재 위치를 가르키는 nodejs의 전역변수임.
// path.join을 사용해서 현재 서버를 구동한 위치와 dist폴더를 합친 경로를 제공함. 이 파일안에 index.html이 있으면 기본으로 보인다.
console.log(_path)
app.use('/dist', express.static(_path))  // static 파일 - 정적 파일 : 변하지 않는다.
app.use(logger('tiny'))  // --- (2) app.use을 통해 모든 요청 중간에 로거를 설정.
//커스텀 미들웨어
app.use((req, res, next)=>{  // --- (3) 
  console.log('요청이 왔네요~ 지나갑니다~')
  next() 
})

app.get('/book/:bookName', (req, res)=>{  // --- (4) get요청으로 이하 url으로 요청값을 보낼 수 있다.
  const {bookName} = req.params // request의 파라미터 값을 bookname으로 한다.
  res.send(`안녕하세요 홍철이네 서점입니다. ${bookName}을 주문하셨군요!`) // 다음과 같이 응답을 해준다.
})
app.listen(PORT, ()=> { // --- (5) listen 메서드로 서버 오픈.
  console.log(`너의 서버는? ${PORT}!`)
})

// path 모듈이란 ?
// 파일, 디렉토리에 관한 path들을 조작할 수 있는 모듈. 대표적으로 join, resolve가 있다.
// resolve - 받은 매개 변수들을 통해 절대 경로를 반환, join - 받은 매개변수들을 연결.

const path = require('path')
const _resolve = path.resolve('.','dist','css')
const _join = path.join(__dirname, 'dist','css')
    console.log(_resolve)
    // C:\Users\desktop\dist\css >> 코드를 실행 시킨 위치로 부터 전체 경로를 반환
    console.log(_join)
    // C:\Users\desktop\dist\css >> 경로들을 연결후 반환. dirname이란 실행되는 파일의 위치를 뜻함.
