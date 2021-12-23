import { NextComponentType, NextPageContext } from "next";
import { List } from "../../components/propertysale/List";
import { PagedCollection } from "../../types/Collection";
import { PropertySale } from "../../types/PropertySale";
import { fetch } from "../../utils/dataAccess";
import Head from "next/head";

interface Props {
  collection: PagedCollection<PropertySale>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  collection,
}) => (
  <div>
    <div>
      <Head>
        <title>PropertySale List</title>
      </Head>
    </div>
    <List property_sales={collection["hydra:member"]} />
  </div>
);

Page.getInitialProps = async () => {
  const collection = await fetch("/property_sales");

  return { collection };
};

export default Page;
