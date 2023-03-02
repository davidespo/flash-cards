import React from "react";

import Card from "../../components/Card";

const CardDemo = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Card title="Small Card">Body Content</Card>
        </div>
        <div className="col-3">
          <Card title="Small Success Card" kind="success" fill>
            Body Content
            <div className="bar"></div>
            <div className="text-center">
              <button className="btn btn-primary">With Custom CTA</button>
            </div>
          </Card>
        </div>
        <div className="col-6">
          <Card
            title="Wide Card"
            kind="info"
            subtitle="Simple only with headers"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;
