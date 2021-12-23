import {NextComponentType, NextPageContext, GetStaticProps} from "next";
import {fetch} from "../../utils/dataAccess";
import Head from "next/head";
import LineChart from "../../components/LineChart";
const Page = ({data1}) => {
    console.log(data1)
    return (
      <div>
        <div>
          <Head>
            <title>PropertySale List</title>
          </Head>
        </div>
        <LineChart/>
      </div>
    )
  }
;

export const getStaticProps: GetStaticProps = async (context) => {
  const collection = await fetch("/property_sales/average");
  return {
    props: {
      data1: collection.data,
    }
  }
}

export default Page;
