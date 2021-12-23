import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/propertysale/Form";
import { PropertySale } from "../../../types/PropertySale";
import { fetch } from "../../../utils/dataAccess";
import Head from "next/head";

interface Props {
  propertysale: PropertySale;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  propertysale,
}) => {
  return (
    <div>
      <div>
        <Head>
          <title>
            {propertysale && `Edit PropertySale ${propertysale["@id"]}`}
          </title>
        </Head>
      </div>
      <Form propertysale={propertysale} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const propertysale = await fetch(asPath.replace("/edit", ""));

  return { propertysale };
};

export default Page;
