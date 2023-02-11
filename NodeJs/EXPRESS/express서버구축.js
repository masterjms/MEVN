// 어떤 요청에 대해 미들웨어 설정하기

// 미들웨어란 ? 톨게이트와 같다. 차선이 확장되기전 톨게이트를 거치는 것처럼 하나의 로직을 거침으로써 일일이 무언가를 설정하지 않아도 된다.
// 미들웨어는 어떤 로직 계층을 중간에 넣는 것으로 , 아래 코드에서 3000번 서버로 요청했을 때 1번 로직이 실행되게 만든 것을 의미.

const express = require('express')
const app = express() // express라는 모듈을 app에 담는다.
const PORT = 3000
// --- 1번로직
app.use((req, res, next)=>{   // app.use를 통해 모든 http요청에 대해 미들웨어를 설정. http요청을 처리하는 매개 변수자로서 요청에는 req, 응답에는 res라는 매개변수가 기본으로 설정된다.
// 다음 미들웨어로 로직을 넘기거나 매개변수를 넘기는 next라는 함수가 존재.

  console.log('1 Time:', Date.now())
  next() // next함수는 다음 미들웨어로 넘겨주는 역할을 한다. next함수가 없으면 2번 로직이 실행이 안될것이다.
})
app.use((req, res, next)=>{  
  console.log('2 Time:', Date.now())
  next()
})
// --- 2번 로직

app.listen(PORT, ()=>{ // express를 통한 서버 실행
  console.log(`서버가 생성되었습니다.${PORT}`)
})
