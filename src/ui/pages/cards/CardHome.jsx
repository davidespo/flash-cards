import { useState } from "react";
import { useSlice } from "../../hooks";
import { useParams } from "react-router-dom";

import { ErrorAlert } from "../../components/Alerts";
import { Loading } from "../../components/Content";
import CardOverviewPage from "./CardOverviewPage";
import CardQuickPage from "./CardQuizPage";

const CardHome = () => {
  const [boxView, setBoxView] = useState(true);
  const { _i } = useParams();
  const { data, error, loading, refresh } = useSlice("sheets");
  if (!!error) {
    <ErrorAlert message={error} />;
  }
  const list = data[_i];
  if (!list) {
    return <Loading />;
  }
  const { title } = list;
  return (
    <div>
      <div className="pull-right">
        <button
          className="btn btn-sm btn-primary me-3"
          disabled={boxView}
          onClick={() => setBoxView(true)}
        >
          <i className="fa fa-check-square-o me-3"></i> Quiz
        </button>
        <button
          className="btn btn-sm btn-primary"
          disabled={!boxView}
          onClick={() => setBoxView(false)}
        >
          <i className="fa fa-list me-3"></i> Overview
        </button>
      </div>
      <h1>{title}</h1>
      {boxView ? (
        <CardQuickPage list={list} />
      ) : (
        <CardOverviewPage list={list} />
      )}
    </div>
  );
};

export default CardHome;
