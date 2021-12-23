import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetch } from "../../utils/dataAccess";
import ReferenceLinks from "../common/ReferenceLinks";
import { PropertySale } from "../../types/PropertySale";

interface Props {
  propertysale: PropertySale;
}

export const Show: FunctionComponent<Props> = ({ propertysale }) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(propertysale["@id"], { method: "DELETE" });
      router.push("/property_sales");
    } catch (error) {
      setError("Error when deleting the resource.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{`Show PropertySale ${propertysale["@id"]}`}</h1>
      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">region</th>
            <td>{propertysale["region"]}</td>
          </tr>
          <tr>
            <th scope="row">area</th>
            <td>{propertysale["area"]}</td>
          </tr>
          <tr>
            <th scope="row">price</th>
            <td>{propertysale["price"]}</td>
          </tr>
          <tr>
            <th scope="row">sellDay</th>
            <td>{propertysale["sellDay"]}</td>
          </tr>
          <tr>
            <th scope="row">sellMonth</th>
            <td>{propertysale["sellMonth"]}</td>
          </tr>
          <tr>
            <th scope="row">sellYear</th>
            <td>{propertysale["sellYear"]}</td>
          </tr>
          <tr>
            <th scope="row">count</th>
            <td>{propertysale["count"]}</td>
          </tr>
          <tr>
            <th scope="row">sellDate</th>
            <td>{propertysale["sellDate"]}</td>
          </tr>
        </tbody>
      </table>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Link href="/property_sales">
        <a className="btn btn-primary">Back to list</a>
      </Link>{" "}
      <Link href={`${propertysale["@id"]}/edit`}>
        <a className="btn btn-warning">Edit</a>
      </Link>
      <button className="btn btn-danger" onClick={handleDelete}>
        <a>Delete</a>
      </button>
    </div>
  );
};
