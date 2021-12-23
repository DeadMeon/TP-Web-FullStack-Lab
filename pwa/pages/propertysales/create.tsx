import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../components/propertysale/Form";
import Head from "next/head";

const Page: NextComponentType<NextPageContext> = () => (
  <div>
    <div>
      <Head>
        <title>Create PropertySale </title>
      </Head>
    </div>
    <Form />
  </div>
);

export default Page;
