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

    const svg = d3.select("#line_chart")
      .attr('width', dim.width)
      .attr('height', dim.height)
      .style('margin-top', '20px')
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


  }, [])

  return (
    <div style={{width: "50%", margin: "0 auto"}}>
      <svg id="line_chart"/>
    </div>
  )
}

export default LineChart;

function arr(arr: any) {
  throw new Error('Function not implemented.');
}
