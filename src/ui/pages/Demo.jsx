import LeftNavLayout, { toView } from "../layout/LeftNavLayout";
import AlertDemo from "./demo/AlertDemo";
import CardDemo from "./demo/CardDemo";
import ContentDemo from "./demo/ContentDemo";
import DataTableDemo from "./demo/DataTableDemo";

const VIEWS = [
  toView("/alerts", <AlertDemo />, "Alerts"),
  toView("/Cards", <CardDemo />, "Cards"),
  toView("/content", <ContentDemo />, "Content Pages"),
  toView("/datatable", <DataTableDemo />, "DataTable"),
];

const Demo = () => {
  return (
    <div>
      <LeftNavLayout routePrefix={"/demo"} views={VIEWS} />
    </div>
  );
};

export default Demo;
