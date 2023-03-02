import React from "react";

import Content, { ComingSoon, NotFound } from "../../components/Content";

const ContentDemo = () => {
  return (
    <div>
      <h1>Standard Pages</h1>
      <div className="bar"></div>
      <ComingSoon />
      <div className="bar"></div>
      <NotFound />
      <div className="bar"></div>
      <h1>Custom Pages</h1>
      <div className="bar"></div>
      <Content header="Custom Content">
        <p className="text-center">
          <em>
            You can inject <code>children</code> content into a{" "}
            <code>Content</code> component.
          </em>
        </p>
        <p className="text-center">
          <button className="btn btn-primary">
            This includes custom CTA's :)
          </button>
        </p>
      </Content>
    </div>
  );
};

export default ContentDemo;
