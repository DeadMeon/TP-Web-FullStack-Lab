import React, {useEffect, useState} from 'react';

const dim = {
  width: 800,
  height: 400
}

const getDateFormat = (donne) => {
  let format;
  let l = donne.split('-').length
  if (l === 3)
    return "%d-%m-%Y";
  else if (l == 2)
    return "%m-%Y"
  return "%Y"
}

const formatDate = (data) => {
  let format = getDateFormat(data[0].key)
  return data.map(d => {
    return {key: d3.timeParse(format)(d.key), value: d.value}
  })
}
const BarChart = ({data}) => {

  const [donne, setDonne] = useState(data)
  
  const getXAxis = (arr) => {

    if (arr.length <= 48) {
      return d3.scaleBand()
        .range([0, dim.width])
        .domain(arr.map(d => d.key))
    }
    return d3.scaleTime()
      .domain(d3.extent(arr, (d) => d.key)).range([0, dim.width])

  }

  const displayXAxis = (svg, arr, x) => {
    if (arr.length <= 48) {
      svg.append("g")
        .attr("transform", "translate(0," + dim.height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");
    } else {
      svg.append("g")
        .attr("transform", "translate(0," + dim.height + ")")
        .call(d3.axisBottom(x));
    }

  }

  useEffect(() => {

    const arr = donne.length > 48 ? formatDate(donne) : donne

    const svg = d3.select('#bar_chart').html("");
    svg
      .attr('width', dim.width)
      .attr('height', dim.height)
      .style("display", "block")
      .style('margin', 'auto')
      .style('overflow', 'visible')

    //Scalling for x-axis
    const x = getXAxis(arr)

    //display x-axis
    displayXAxis(svg, arr, x)

    //Scalling for y-axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(arr, (d) => d.value)]).range([dim.height, 0]);

    //display y-axis
    svg.append("g")
      .call(d3.axisLeft(y));

    const bar = svg.selectAll("rect")
      .data(arr)

    bar.enter()
      .append("rect")
      .attr("x", d => x(d.key))
      .attr("width", arr.length > 48 ? dim.width / arr.length : x.bandwidth())
      .attr("fill", "#69b3a2")
      .attr("height", d => dim.height - y(0))
      .attr("y", d => y(0))
      .style('fill', 'indianred')
      .style('stroke', 'black')

    bar.exit().remove()

    svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", d => y(d.value))
      .attr("height", d => dim.height - y(d.value))

  }, [donne])

  return (
    <div style={{width: "50%", margin: "100px auto"}}>
      <svg id="bar_chart"/>
    </div>
  )

};

export default BarChart;
