import Head from "next/head";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import HeroComponent from "components/HeroComponent";
import CardComponent from "components/CardComponent";

const Welcome = () => (
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
                <CardComponent title="Prix Moyen du m²" text="tebvhbsibdovsd,vs" />
            </div>
            <div id="NbVentes" className="pt-5">
                <CardComponent title="Nombre de vente" text="tebvhbsibdovsd,vs" />
            </div>
            <div id="VentesParRegion" className="py-5">
                <CardComponent title="Ventes par Région" text="tebvhbsibdovsd,vs" />
            </div>
        </div>
        
        <FooterComponent />
    </>
);
export default Welcome;