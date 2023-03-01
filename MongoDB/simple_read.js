const mongoose = require('mongoose')
const USER = 'dabin'
const PWD = 'dabin12010'
const HOST = 'localhost:27017'
const DB = 'sensor'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
mongoose.set('useFindAndModify', false)
mongoose.connect(mongodbURL, {useNewUrlParser: true}) 
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err))
const Photo = require('./models/photo.js')


// 이전에 create를 했으니 read를 하여 조회하기
const main = async()=>{  
  const t = await Photo.findOne({
      "title" : {
        $eq : '큰돌' //$eq는 해당 값과 일치하는 값을 가진 도큐먼트를 찾는것.
      },  // 콤마를 통해서 논리연산지 &&를 구현할 수 있음
      "url" : {
        $eq : 'jhc9639@naver.com'
      }
    }).lean() //lean()은 순수 js객체이자 json object를 반환하는데 사용. 없다면 docs를 받을때 JSON.parse를 해서 object로 만들어줘야함.
  console.log(t)
}  
main()

// findOne을 통해 tittle이 큰돌이고 url이 위와 같은 것을 찾아낸다. key와 value를 맞춰 매개변수를 넣으면 된다.
// 찾는 대상이 단일일때는 findOne, 다수일땐 find를 사용.