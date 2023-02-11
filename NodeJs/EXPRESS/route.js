// 라우팅이란 사용자가 요청하는 각기 다른 유형의 요청, url에 따라 다른 콘텐츠를 보여주는 것을 말한다. 요청의 유형: get,post,put,patch,delete
// get요청을 통해 페이지를 들여왔음을 인지할것


// 1. 라우팅 설정
// simple_get.js
const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000 
app.use(loogger('tiny')) 
const simple_module = require('./simple_module.js')
app.get('/', simple_module.intro) //  '/'이라는 요청에 대해 simple_module의 intro함수가 처리한다.
app.get('/users/:userName/books/:bookName', simple_module.handleBook)  // '/users/:userName/books/:bookName'이라는 요청에 대해 simple_module의 handleBook라는 함수가 처리한다.

app.listen(PORT, ()=>{
  console.log(`서버가 생성되었습니다.${PORT}`)
})

// 2. 컨트롤러 설정
// simple_module.js
module.exports.handleBook = (req, res)=>{
    console.log(req.params) 
    res.send(req.params)  
  }  
  module.exports.intro = (req, res)=>{ 
    res.send(`우리의 Express로 만든 서버입니다..!`)  
  }

// ------------------------------- 예시 ------------------------------------- //

// 만약 URL을 http://127.0.0.1:3000/users/승철/books/논어 라고 요청한다면?
 // {"userName":"승철","bookName":"논어"}
 // response의 parameter값 