// 서버는 항상 중지되지 않고 살아있어야한다. 자동으로 서버를 다시 시작해주고 관리해주는 프로세스 매니저 라이브러리 pm2가 있다.

// 일부러 중지되는 서버 : 에러로 인한 서버 중지되는 상황

const http = require('http')    
const PORT = 12010
const server = http.createServer((req, res) => {   
  res.setHeader('Content-Type', 'application/json charset=utf-8') 
  const obj = {
    "이름" : "큰돌"
  }
  res.end(JSON.stringify(obj)) 
}) 

setTimeout(()=>{ 
  //애러를 발생시켜서 1초마다 서버가 중지되게 만듭니다.
  JSON.parse("{Z") // 문자열이 아니기 때문. 올바른 json형식을 맞춰야한다.
}, 1000)
server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`)
})

//------pm2로 다시 살아나는 서버 만들기------//
// npm install pm2 -g
// pm2는 서버 중지시 자동실행은 물론, pm2 monit를 이용해 로그로 저장까지 해준다.
