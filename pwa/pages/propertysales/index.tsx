import {NextComponentType, NextPageContext, GetStaticProps} from "next";
import {fetch} from "../../utils/dataAccess";
import Head from "next/head";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";

const Page = ({lineData, barData}) => {
    return (
      <div>
        <div>
          <Head>
            <title>PropertySale List</title>
            <script src="https://d3js.org/d3.v7.min.js"/>
          </Head>
        </div>
        <div>
          <LineChart data={lineData}/>
          <BarChart data={barData}/>
        </div>
      </div>
    )
  }
;

export const getStaticProps: GetStaticProps = async (context) => {
  const lineCollection = await fetch("/property_sales/average");
  const barCollection = await fetch("/property_sales/count/year/1-1-2017/1-12-2020");

  return {
    props: {
      lineData: lineCollection.data,
      barData: barCollection.data
    }
  }
}

export default Page;
