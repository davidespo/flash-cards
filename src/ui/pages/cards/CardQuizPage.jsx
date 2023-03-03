import _ from "lodash";

import { useEffect, useState } from "react";

const CardQuizPage = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [shuffledItems, setShuffledItems] = useState(_.shuffle(items));
  useEffect(() => {
    setShuffledItems(_.shuffle(items));
    setIndex(0);
  }, [items]);
  const humanIndex = index + 1;
  const count = items.length;
  const progress = Math.trunc((100 * humanIndex) / count);
  return (
    <div
      className="m-3 p-3 border d-flex flex-column"
      style={{ minHeight: "60vh", minWidth: "400px" }}
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
            {index < count ? shuffledItems[index] : "🥳🎉👏"}
          </div>
        </div>
        <div className="d-flex align-content-stretch">
          <button
            className="btn btn-info"
            onClick={() => setIndex(index + 1)}
            disabled={index >= count}
          >
            Next <i className="fa fa-angle-double-right"></i>
          </button>
        </div>
      </div>
      <div>
        <div className="progress mt-3" role="progressbar">
          <div
            className={`progress-bar progress-bar-striped bg-success`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-center">
          {index < count ? `${humanIndex} of ${count}` : "Done"}
        </div>
      </div>
    </div>
  );
};

export default CardQuizPage;
