const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => { // http객체 안에 있는 메서드인 createServer를 통해 서버를 만든다.
    res.setHeader('Content-Type','text/plain; charset=utf-8') // 응답값은 텍스트(헤더정보)
    res.end('hello world') // res.end로 사용자의 요청에 대한 응답으로 문자열을 보냄.
})

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0:${PORT}/`)
})

// --------------example--------------- // 

const http = require('http')
const PORT = 3000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','application/json; charset=utf-8') // 응답값은 json형태
    const obj = { // obj라는 객체체는 이름이라는 key, 장민성이라는 value값을 가지는 json object
        "이름" : "장민성"
    }
    res.end(JSON.stringify(obj)) // json 문자열로 반환
})

server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0:${PORT}/`)
})

