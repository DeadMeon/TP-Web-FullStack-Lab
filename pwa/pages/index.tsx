import Head from "next/head";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";

const Welcome = () => (
    <>
        <Head>
            <title>PaluStats</title>
            <script src="https://d3js.org/d3.v7.min.js"/>
        </Head>

        <HeaderComponent />

        <FooterComponent />
    </>
);
export default Welcome;