import React from "react";

const Card = ({ title, subtitle, children, kind, fill }) => {
  return (
    <div
      className={`card ${
        !!kind && !fill ? `border border-${kind} border-3` : `text-bg-${kind}`
      }`}
    >
      <div className="card-body">
        {!!title && <h5 className="card-title">{title}</h5>}
        {!!subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
};

export default Card;
