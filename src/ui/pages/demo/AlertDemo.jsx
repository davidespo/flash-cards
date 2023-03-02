import {
  ErrorAlert,
  InfoAlert,
  PrimaryAlert,
  SuccessAlert,
  WarningAlert,
} from "../../components/Alerts";

const alertDemo = (Component, name, message) => (
  <div className="mb-3">
    <Component title={`${name} Alert`} message={message}>
      This is a {name} alert!
    </Component>
  </div>
);

const AlertDemo = () => {
  return (
    <div>
      <h1>Alerts</h1>
      {alertDemo(PrimaryAlert, "Primary")}
      {alertDemo(SuccessAlert, "Success")}
      {alertDemo(InfoAlert, "Info")}
      {alertDemo(WarningAlert, "Warning")}
      {alertDemo(ErrorAlert, "Error")}
      {alertDemo(
        ErrorAlert,
        "Error with Message",
        "500 :: Failed to do a thing."
      )}
    </div>
  );
};

export default AlertDemo;
