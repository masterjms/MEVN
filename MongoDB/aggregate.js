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
const Sensor = require('./models/sensor.js')


const main = async()=>{  
  const test1 = await Sensor.aggregate( // 집합시키다.
    [
      {$match : {temp : {$gte : 26}}}, // 조건을 설정 : temp 값이 26이상인 것을 가져온다
      {$group : {_id :"$id", total : {$sum : "$temp"}}} // 26이상인 값들의 id값을 _id라고 설정, temp에 들어간 값들의 합을 구한것을 total이라고 한다. 이를 모두 하나의 group으로 매핑. test1
      // 그룹화할 유니크한 _id를 고른 후 그룹 후 모든 temp의 합계를 구합니다. 
    ]
  )
  console.log(test1)
 // [ { _id: 402, total: 31374.8 } ]
 
  const test2 = await Sensor.aggregate(
    [
      {$match : {$or : [{temp : {$gte : 26, $lte : 27}}, {humi : {$gte : 80}}]}}, // 조건을 설정 : 26이상이고 27이하인것 temp (이거나) 80이상인 것 humi 
      {$group : {_id :"$id", count : {$sum : 1 }}}, // 위와 같은 조건이 탐색되면 count가 1씩 올라간다.
      {$project : {_id : 0, count : 1}} // return되는 결과값의 영역을 설정합니다.
      // 그룹화할 유니크한 _id를 고른 후 그룹 후 모든 것들을 셉니다. _id는 0거짓으로 하여 보이지 않게 하고, count만 보이도록한다.
    ]
  )  
  // [ { count: 565 } ]
  console.log(test2)

  const test3 = await Sensor.aggregate(
    [ 
      {$match : {$and : [{temp : {$eq : 26.2}}, {humi : {$eq : 85.7}}]}}, // 조건을 설정 : temp가 26.2와 같고, and humi가 85.7이면
      {$sort : {temp : 1}}, //나온 temp값들을 1, 즉 오름차순으로 정렬한다.
      {$limit : 5}, // 오름차순 나열할것중 상위 5개로 제한한다.
      {$project : {_id : 0, temp : 1, time: 1, min: {$minute : "$time"}}}, // temp값이 존재하고 time값을 가진 것들 중 시간에서 분 값을 뽑아낸다.
      {$match : {min : {$eq : 1}}}  // 분 값이 1인 것을 뽑아낸다.
    ]
  )
  console.log(test3)
  //[ { time: 2019-08-01T15:01:00.000Z, temp: 26.2, min: 1 }]
}  
main()