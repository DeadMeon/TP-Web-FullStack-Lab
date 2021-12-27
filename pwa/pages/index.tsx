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

        <HeroComponent title="PaluStats" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit eaque magni natus doloremque harum." />

        <CardComponent title="Prix Moyen du m²" text="tebvhbsibdovsd,vs" />

        <FooterComponent />
    </>
);
export default Welcome;