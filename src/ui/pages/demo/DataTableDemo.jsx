import axios from "axios";
import { useData } from "../../hooks";

import BasicDataTable, { col, propCol } from "../../components/BasicDataTable";
import { copyToClipboard } from "../../../utils";

const COLS = [
  propCol("name"),
  propCol("username"),
  propCol("email"),
  col("Phone", (row) => row.phone, false, {
    format: (row) => (
      <>
        <code className="me-1">{row.phone}</code>
        <button
          className="btn btn-sm"
          onClick={() => copyToClipboard(row.phone)}
        >
          <i className="fa fa-copy"></i>
        </button>
      </>
    ),
  }),
];

const DataTableDemo = () => {
  const { loading, data, error, refresh } = useData([], async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    return res.data;
  });
  return (
    <>
      <h1>Datatable</h1>
      <div className="pull-right">
        <button className="btn btn-sm btn-success" onClick={refresh}>
          <i className="fa fa-refresh"></i>
        </button>
      </div>
      <h3>Users Demo</h3>
      {!!error && <ErrorAlert title="Failed to Fetch Users" message={error} />}
      <BasicDataTable loading={loading} columns={COLS} key="id" data={data} />
    </>
  );
};

export default DataTableDemo;
