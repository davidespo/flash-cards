import { useDispatch } from "react-redux";
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
    <InfoAlert title={`Active: ${active.title}`}>
      {loading ? (
        <em>Loading...</em>
      ) : (
        <>
          {!!data ? (
            data.map(({ title }, i) => (
              <Link
                className="btn btn-sm text-bg-light m-2"
                to={`/lists/${i}`}
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
  const { loading, active, all, data, error, refresh } = useSheets("sheets");
  const dispatch = useDispatch();
  const onSelect = (newActiveSheet) =>
    dispatch.sheets.selectActiveSheet(newActiveSheet);
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
            <div className="col-xs-12 col-sm-6 mb-4" key={sheet.id}>
              <Card title={sheet.title} kind={isActive ? "success" : ""} fill>
                <button
                  className="btn btn-primary w-100"
                  disabled={isActive}
                  onClick={() => onSelect(sheet)}
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
