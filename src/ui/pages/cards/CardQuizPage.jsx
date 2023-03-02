import { useState } from "react";

const CardQuizPage = ({ list }) => {
  const [index, setIndex] = useState(0);
  const i = index + 1;
  const { items } = list;
  return (
    <div
      className="m-3 p-3 border d-flex flex-column"
      style={{ minHeight: "60vh" }}
    >
      <div className="flex-grow-1 d-flex">
        <div className="d-flex align-content-stretch">
          <button
            className="btn btn-secondary"
            onClick={() => setIndex(index - 1)}
            disabled={index <= 0}
          >
            <i className="fa fa-angle-double-left"></i> Back
          </button>
        </div>
        <div className="display-1 flex-grow-1 d-flex justify-content-center">
          <div className="d-flex align-content-around flex-wrap">
            {index < items.length ? items[index] : "🥳🎉👏"}
          </div>
        </div>
        <div className="d-flex align-content-stretch">
          <button
            className="btn btn-info"
            onClick={() => setIndex(index + 1)}
            disabled={index >= items.length}
          >
            Next <i className="fa fa-angle-double-right"></i>
          </button>
        </div>
      </div>
      <div>
        <div className="progress mt-3" role="progressbar">
          <div
            className={`progress-bar progress-bar-striped bg-success`}
            style={{
              width: `${Math.trunc((100 * i) / items.length)}%`,
            }}
          ></div>
        </div>
        <div className="text-center">
          {i <= items.length ? `${i} of ${items.length}` : "Done"}
        </div>
      </div>
    </div>
  );
};

export default CardQuizPage;
