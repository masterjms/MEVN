<template>
  <div class="Map">
    <div class="d3 card"></div>
  </div>
</template>
<script>
  import {
    onMounted
  } from 'vue'
  import * as d3 from 'd3'
  import * as topojson from 'topojson-client'
  // json파일의 출처 :  https://github.com/southkorea/southkorea-maps/tree/master/kostat/2018/json
  const koreaMap = require('./assets/skorea-provinces-2018-topo-simple.json')
  export default {
    name: 'App',
    components: {},
    setup() {
      const draw = () => {
        const map = topojson.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo)
        const width = 500
        const height = 500
        const svg = d3
          .select('.d3')
          .append('svg')
          .attr('width', width).attr('height', height); // d3클래스를 가진 dom에 svg태그를 append하고 attr로 넓이와 높이 설정.
const projection = d3.geoMercator() // 메르카토르 투사법
.scale(1) // 확대 축소
.translate([0, 0]) // 지도의 중심 설정
        const path = d3.geoPath().projection(projection) // 지도를 그릴 path라는 DOM을 만든다. 이미 지도는 projection으로 만들어 놓았으니 쉽게 그릴수있다.
        const bounds = path.bounds(map) // 지도의 범위는 map으로 한다.bounds(범위)를 통해 y축 끝값, x축 끝값을 설정. 미리 map으로 우리나라 지도 중앙으로 할 수있다.
        const widthScale = (bounds[1][0] - bounds[0][0]) / width
        const heightScale = (bounds[1][1] - bounds[0][1]) / height
        const scale = 1 / Math.max(widthScale, heightScale) // 축척 : 5만배 축소하면 1/50000이 된다. 축척을 1/maxScale로 구현
        const xoffset = width / 2 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10
        const yoffset = height / 2 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80
        const offset = [xoffset, yoffset]
        projection.scale(scale).translate(offset)
        const mapArea = svg.append('g')
          .selectAll('path').data(map.features)
          .enter().append('path')
          .attr('d', path)
        const mapInfo = [{
            "name": "서울",
            "lat": "37.532600",
            "lon": "127.024612",
            "number": "24,267"
          },
          {
            "name": "대전",
            "lat": "36.3730178",
            "lon": "127.2483736",
            "number": "1,098"
          }
        ]
        const airInfo = [{
          "name": "비행기",
          "lat": "38.132600",
          "lon": "125.224612"
        }]
        const icons = svg.append('g').selectAll('svg')
          .data(airInfo)
          .enter()
          .append("svg:image")
          .attr("width", 43)
          .attr("height", 43)
          .attr('x', d => projection([d.lon, d.lat])[0])
          .attr('y', d => projection([d.lon, d.lat])[1])
          .attr('opacity', 1)
          .attr("xlink:href", require("./assets/airplane.png"))
        const rect = svg.append('g').selectAll('rect')
          .data(mapInfo)
          .enter()
          .append("rect")
          .attr('x', d => projection([d.lon, d.lat])[0])
          .attr('y', d => projection([d.lon, d.lat])[1])
          .attr('width', 60)
          .attr('height', 35)
          .attr('opacity', 1)
          .attr("rx", 2)
        const text_name = svg.append('g').selectAll('text')
          .data(mapInfo)
          .enter()
          .append("text")
          .text(d => d.name)
          .attr('x', d => projection([d.lon, d.lat])[0] + 17)
          .attr('y', d => projection([d.lon, d.lat])[1] + 15)
          .attr('font-size', ".8rem")
          .attr('opacity', 1)
        const text_number = svg.append('g').selectAll('text')
          .data(mapInfo)
          .enter()
          .append("text")
          .text(d => d.number)
          .attr('x', d => projection([d.lon, d.lat])[0] - d.number.length * 2 + 15)
          .attr('y', d => projection([d.lon, d.lat])[1] + 30)
          .attr('font-weight', "bold")
          .attr("fill", "#de481f")
        const zoomed = (e) => {
          mapArea.attr('transform', e.transform)
          text_name.attr("transform", e.transform)
          text_number.attr("transform", e.transform)
          rect.attr("transform", e.transform)
          icons.attr("transform", e.transform)
        }
        const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed)
        svg.call(zoom)
      }
      onMounted(() => {
        draw()
      })
      return {
        draw
      }
    }
  }
</script>

<style>
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
  .d3 {
    background: white;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    width: 1000px;
  }
  .d3:hover {
    cursor: pointer;
  }
  .Map path {
    fill: #f7a5a5;
    stroke: white;
  }
  .Map svg {
    background: #d0e2f3;
    font-family: "Nanum Gothic";
  }
  .Map svg rect {
    fill: rgba(255, 255, 255, 0.9);
  }
  .triangle {
    fill: rgba(255, 255, 255, 0.9);
  }
</style>