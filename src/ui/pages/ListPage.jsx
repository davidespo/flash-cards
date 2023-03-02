import { useSheets } from "../hooks";

import { Link } from "react-router-dom";
import { ErrorAlert } from "../components/Alerts";
import { Loading } from "../components/Content";
import Card from "../components/Card";

const ListCard = ({ list }) => {
  return (
    <Card title={list.title}>
      <div className="text-center">
        <Link className="btn btn-primary w-100" to={`/lists/${list._i}`}>
          View
        </Link>
      </div>
    </Card>
  );
};

const ListView = ({ data }) => {
  return (
    <>
      <h1>Pick a list</h1>
      <div className="row">
        {data.map((list, i) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={list.title}
          >
            <ListCard list={list} />
          </div>
        ))}
      </div>
    </>
  );
};

const ListPage = () => {
  const { data, error, loading, refresh } = useSheets("sheets");
  return (
    <div>
      <div className="pull-right">
        <button className="btn btn-sm btn-success" onClick={refresh}>
          <i className="fa fa-refresh"></i>
        </button>
      </div>
      {!!error ? (
        <ErrorAlert message={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <ListView data={data} />
      )}
    </div>
  );
};

export default ListPage;
