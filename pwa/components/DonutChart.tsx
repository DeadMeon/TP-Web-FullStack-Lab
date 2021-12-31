import React, {useEffect, useState} from 'react';
import {fetch} from "../utils/dataAccess";

const dim = {
  width: 1000,
  height: 600,
  margin: 40
}

const DonutChart = ({params}) => {
  const [data, setData] = useState(params)



  useEffect(() => {

  }, [data])



  return (
    <div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <select className="form-select m-1" >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>

        </select>
        <button className="btn btn-outline-secondary m-lg-1" onClick={()=>{}}>Load Data</button>

      </div>
      <svg id="donut_chart"/>
      <p className="text-center h1 font-weight-bold">{()=>{}}</p>
    </div>
  )
}

export default DonutChart;
