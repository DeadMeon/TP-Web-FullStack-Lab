import Head from "next/head";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import HeroComponent from "components/HeroComponent";
import CardComponent from "components/CardComponent";
import LogoComponent from "components/LogoComponent";
import {GetStaticProps} from "next";
import {fetch} from "../utils/dataAccess";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
const Welcome = ({lineData, barData, donutData}) => (
    <>
        <Head>
            <title>PaluStats</title>
            <script src="https://d3js.org/d3.v7.min.js"/>
        </Head>

        <HeaderComponent />

        <div id="Hero">
             <HeroComponent title="PaluStats" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit eaque magni natus doloremque harum." />
        </div>

        <div id="Card">
            <div id="PrixMetreCarre" className="pt-5">
                <CardComponent title="Prix Moyen du m²" text="tebvhbsibdovsd,vs" component={<LineChart data={lineData}/>}/>
            </div>
            <div id="NbVentes" className="pt-5">
                <CardComponent title="Nombre de vente" text="tebvhbsibdovsd,vs" component={<BarChart data={barData}/>} />
            </div>
            <div id="VentesParRegion" className="py-5">
                <CardComponent title="Ventes par Région" text="tebvhbsibdovsd,vs" />
            </div>
        </div>

        <FooterComponent />
    </>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const lineCollection = await fetch("/property_sales/average");
  const barCollection = await fetch("/property_sales/count/year/1-1-2017/1-10-2020");
  const donutCollection = await fetch("/property_sales/sell/2020")

  return {
    props: {
      lineData: lineCollection.data,
      barData: barCollection.data,
      donutData: donutCollection.data
    }
  }
}

export default Welcome;
