import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/propertysale/Show";
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
          <title>{`Show PropertySale ${propertysale["@id"]}`}</title>
        </Head>
      </div>
      <Show propertysale={propertysale} />
    </div>
  );
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const propertysale = await fetch(asPath);

  return { propertysale };
};

export default Page;
