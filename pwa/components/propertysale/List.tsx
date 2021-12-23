import { FunctionComponent } from "react";
import Link from "next/link";
import ReferenceLinks from "../../components/common/ReferenceLinks";
import { PropertySale } from "../../types/PropertySale";

interface Props {
  property_sales: PropertySale[];
}

export const List: FunctionComponent<Props> = ({ property_sales }) => (
  <div>
    <h1>PropertySale List</h1>
    <Link href="/property_sales/create">
      <a className="btn btn-primary">Create</a>
    </Link>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>region</th>
          <th>area</th>
          <th>price</th>
          <th>sellDay</th>
          <th>sellMonth</th>
          <th>sellYear</th>
          <th>count</th>
          <th>sellDate</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {property_sales &&
          property_sales.length !== 0 &&
          property_sales.map((propertysale) => (
            <tr key={propertysale["@id"]}>
              <th scope="row">
                <ReferenceLinks
                  items={propertysale["@id"]}
                  type="propertysale"
                />
              </th>
              <td>{propertysale["region"]}</td>
              <td>{propertysale["area"]}</td>
              <td>{propertysale["price"]}</td>
              <td>{propertysale["sellDay"]}</td>
              <td>{propertysale["sellMonth"]}</td>
              <td>{propertysale["sellYear"]}</td>
              <td>{propertysale["count"]}</td>
              <td>{propertysale["sellDate"]}</td>
              <td>
                <ReferenceLinks
                  items={propertysale["@id"]}
                  type="propertysale"
                  useIcon={true}
                />
              </td>
              <td>
                <Link href={`${propertysale["@id"]}/edit`}>
                  <a>
                    <i className="bi bi-pen" aria-hidden="true" />
                    <span className="sr-only">Edit</span>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
