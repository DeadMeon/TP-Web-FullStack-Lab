import React, {useEffect, useState} from 'react';

const dim = {
  width: 800,
  height: 400
}


const BarChart = ({data}) => {

  const [donne, setDonne] = useState(data)


  useEffect(() => {
    const svg = d3.select('#bar_chart').html("");
    svg
      .attr('width', dim.width)
      .attr('height', dim.height)
      .style("display", "block")
      .style('margin', 'auto')
      .style('overflow', 'visible')

    //Scalling for x-axis
    const x = d3.scaleBand()
      .range([0, dim.width])
      .domain(donne.map(d => d.key))
      .padding(0.1);

    //display x-axis
    svg.append("g")
      .attr("transform", "translate(0," + dim.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    //Scalling for y-axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(donne, (d) => d.value)]).range([dim.height, 0]);

    //display y-axis
    svg.append("g")
      .call(d3.axisLeft(y));


  }, [donne])

  return (
    <div style={{width: "50%", margin: "100px auto"}}>
      <svg id="bar_chart"/>
    </div>
  )

};

export default BarChart;
