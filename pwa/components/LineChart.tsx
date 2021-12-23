import React, {useEffect} from 'react';

const dim = {
  width: 800,
  height: 400
}

const LineChart = ({data}) => {

  useEffect(() => {

    const arr = data.map(d => {
      return {key: d3.timeParse("%m-%Y")(d.key), value: d.value}
    })
    arr.sort((a, b) => (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0))

    const svg = d3.select("#line_chart")
      .attr('width', dim.width)
      .attr('height', dim.height)
      .style("display","block")
      .style('margin', 'auto')
      .style('overflow', 'visible')

    //Scalling for x-axis
    const x = d3.scaleTime()
      .domain(d3.extent(arr, (d) => d.key)).range([0, dim.width])

    //display x-axis
    svg.append("g")
      .attr("transform", "translate(0," + dim.height + ")")
      .call(d3.axisBottom(x));

    //Scalling for y-axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(arr, d => d.value)]).range([dim.height, 0]);

    //display x-axis
    svg.append("g")
      .call(d3.axisLeft(y));

    const line = d3.line()
      .x(d=>x(d.key))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX)

    const path = svg.append("path")
      .datum(arr)
      .attr("fill", "none")
      .attr("stroke", "#0c2844")
      .attr("stroke-width", 1)
      .attr("d", line)

    const info = d3.select("body")
      .append("div")
      .attr("class", "circle-info");

    //Adding circle
    svg.selectAll(".circle")
      .data(arr)
      .enter()
      .append("circle")
      .attr("class","circle")
      .attr("cx",d => x(d.key))
      .attr("cy",d => y(d.value))
      .attr("r",5)
      .on("mouseover",(d,i) => {
        d.target.classList.remove('circle')
        d.target.classList.add("circle-focus")
        info.html(d3.timeFormat("%m-%Y")(i.key) + "<br/> Prix M2 : " + i.value + "€")
          .style("visibility", "visible")
          .style('top', d.pageY - 12 + 'px')
          .style('left', d.pageX + 25 + 'px')
      })
      .on("mouseleave",(d,i) => {
        d.target.classList.remove('circle-focus')
        d.target.classList.add("circle")
        info.style("visibility","hidden")
      })

  }, [])

  return (
    <div style={{width: "50%", margin: "20px auto"}}>
      <svg id="line_chart"/>
    </div>
  )
}

export default LineChart;

function arr(arr: any) {
  throw new Error('Function not implemented.');
}

