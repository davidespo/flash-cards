import { useState } from "react";
import { useSlice } from "../../hooks";
import { useParams } from "react-router-dom";

import { NavLink, Route, Routes } from "react-router-dom";
import { ErrorAlert } from "../../components/Alerts";
import { Loading } from "../../components/Content";
import CardOverviewPage from "./CardOverviewPage";
import CardQuickPage from "./CardQuizPage";

const CardHome = () => {
  const { _i } = useParams();
  const { data, error, loading } = useSlice("sheets");
  if (!!error) {
    <ErrorAlert message={error} />;
  }
  const list = data[_i];
  if (loading || !list) {
    return <Loading />;
  }
  const { title, items } = list;
  return (
    <div>
      <h1>{title}</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to={`/lists/${_i}/quiz`}>
            <i className="fa fa-check-square-o me-1"></i> Quiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={`/lists/${_i}/overview`}>
            <i className="fa fa-list me-1"></i> Overview
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/quiz" element={<CardQuickPage items={items} />} />
        <Route path="/overview" element={<CardOverviewPage items={items} />} />
      </Routes>
    </div>
  );
};

export default CardHome;
