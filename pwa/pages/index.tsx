import Head from "next/head";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import HeroComponent from "components/HeroComponent";

const Welcome = () => (
    <>
        <Head>
            <title>PaluStats</title>
            <script src="https://d3js.org/d3.v7.min.js"/>
        </Head>

        <HeaderComponent />
        
        <HeroComponent title="PaluStats" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sit eaque magni natus doloremque harum." />

        <FooterComponent />
    </>
);
export default Welcome;