import React, {useEffect, useState} from 'react';
import {fetch} from "../utils/dataAccess";

const dim = {
  width: 1000,
  height: 600,
  margin: 40
}

const DonutChart = ({data}) => {
  const [donne, setData] = useState(data)
  const [year, setYear] = useState("2020")
  const [displayYear, setDisplayYear] = useState("2020")


  useEffect(() => {
    const dataArr = reformatData(donne);
    const radius = Math.min(dim.width, dim.height) / 2 - dim.margin

    const svg = d3.select("#donut_chart")
      .attr("width", dim.width)
      .attr("height", dim.height)
      .append("g")
      .attr("transform", "translate(" + dim.width / 2 + "," + dim.height / 2 + ")");

    const color = d3.scaleOrdinal()
      .domain(dataArr.map(d => d.key))
      .range(d3.schemeDark2);

    const pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(d => d[1].value)
    const data_ready = pie(Object.entries(dataArr))

    const arc = d3.arc()
      .innerRadius(radius * 0.5)         // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9)

    const path = svg
      .selectAll('allSlices')
      .data(data_ready)
      .join('path')
      .attr('fill', d => color(d.data[1].value))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

    path.transition().duration(500).attr("d", arc);


    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .join('polyline')
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function (d) {
        const posA = arc.centroid(d) // line insertion in the slice
        posA[0] = posA[0] > 0 ? posA[0] + 10 : posA[0] - 10;
        posA[1] = posA[1] > 0 ? posA[1] + 10 : posA[1] - 10;
        const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        const posC = outerArc.centroid(d); // Label position = almost the same as posB
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })

    svg
      .selectAll('allLabels')
      .data(data_ready)
      .join('text')
      .text(d => d.data[1].value.toFixed(2) + "%")
      .attr('transform', function (d) {
        const pos = arc.centroid(d);
        pos[0] = pos[0] + 5
        pos[1] = pos[1] + 5
        return `translate(${pos})`;
      })
      .style('text-anchor', function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'middle' : 'middle')
      })


    svg
      .selectAll('allLabels')
      .data(data_ready)
      .join('text')
      .text(d => d.data[1].key)
      .attr('transform', function (d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style('text-anchor', function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
      })
  }, [donne])

  const reformatData = (data) => {
    const tmpArr = [];
    data.forEach(d => {
      if (d.value > 4)
        tmpArr.push(d)
      else {
        let index = tmpArr.findIndex(i => i.key === "autre")
        if (index === -1) {
          tmpArr.push({key: "autre", value: d.value})
        } else {
          tmpArr[index].value = tmpArr[index].value + d.value

        }
      }
    })
    return tmpArr
  }

  const onChange = (event) => {setYear(event.target.value)}

  const onClick = async () => {
    const donutCollection = await fetch("/property_sales/sell/" + year)
    d3.select('#donut_chart').html("");
    setDisplayYear(year)
    setData(donutCollection.data)
  }

  return (
    <div id="donut">
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <select className="form-select m-1" onChange={onChange} >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>

        </select>
        <button className="btn btn-outline-secondary m-lg-1" onClick={onClick}>Load Data</button>

      </div>
      <svg id="donut_chart"/>
      <p id="displayed_year" className="text-center h1 font-weight-bold">{displayYear}</p>
    </div>
  )
}

export default DonutChart;
