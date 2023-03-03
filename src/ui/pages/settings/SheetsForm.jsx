import { useEffect } from "react";
import { useSheets } from "../../hooks";

import { Link } from "react-router-dom";
import { ErrorAlert, InfoAlert } from "../../components/Alerts";
import Card from "../../components/Card";

const SelectedCard = ({}) => {
  const { loading, active, all, data, error } = useSheets("sheets");
  if (!!error) {
    return <ErrorAlert title={`Active: ${active.title}`} message={error} />;
  }
  return (
    <InfoAlert title={`Active Spreadsheet: ${active.title}`}>
      {loading ? (
        <em>Loading...</em>
      ) : (
        <>
          {!!data ? (
            data.map(({ title }, i) => (
              <Link
                className="btn btn-sm text-bg-light m-2"
                to={`/lists/${i}/quiz`}
                key={title}
              >
                {title}
              </Link>
            ))
          ) : (
            <p>Refresh to view lists.</p>
          )}
        </>
      )}
    </InfoAlert>
  );
};

const SheetsForm = () => {
  const { loading, active, all, data, error, refresh, selectActive } =
    useSheets("sheets");
  useEffect(() => {
    const hasActiveListSet = !!active;
    const notInitialized = !loading && !data && !error;
    if (hasActiveListSet && notInitialized) {
      refresh();
    }
  }, [loading, data, error]);
  return (
    <div>
      <div className="pull-right">
        <button className="btn btn-sm btn-success" onClick={refresh}>
          <i className="fa fa-refresh"></i>
        </button>
      </div>
      <SelectedCard />
      <div className="bar"></div>
      <h2>Saved Sheets</h2>
      <div className="row">
        {all.map((sheet) => {
          const isActive = sheet.id === active.id;
          return (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={sheet.id}>
              <Card title={sheet.title} kind={isActive ? "success" : ""} fill>
                <button
                  className="btn btn-primary w-100"
                  disabled={isActive}
                  onClick={() => selectActive(sheet)}
                >
                  {isActive ? "Active" : "Select"}
                </button>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SheetsForm;
