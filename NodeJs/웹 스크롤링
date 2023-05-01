const Nightmare = require('nightmare')
const vo = require('vo')
const nightmare = Nightmare({
    show: true
})
const BASE_URL = `https://grafolio.naver.com/category/painting`
const GRAPOLIO_URL = `${BASE_URL}#category_popular_creator`

function* run() {
    yield nightmare.goto(GRAPOLIO_URL) // 순차적 동기함수 다음 url로 이동하라
    let preHeight, currHeight = 0
    while (preHeight !== currHeight){
        preHeight = currHeight
        currHeight = yield nightmare.evaluate_now(()=> document.body.scrollHeight) //창사이즈 읽어오기
        yield nightmare.scrollTo(currHeight, 0).wait(3000) //scrollto(x좌표,y좌표)
    }
    const a = yield nightmare
    .evaluate(() => Array.from(document.querySelectorAll('a.thumb'))
    .map(e => (`https://grafoilo.naver.com${e.getAttribute('herf')}`)))
    console.log(a)
    yield nightmare.end()
}
vo(run)(() => console.log('scrap complete'))
