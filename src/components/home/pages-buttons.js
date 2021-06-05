import React from "react";

const PagesButtons = ({ action, info }) => {
  return (
    <div className="flex-1 text-right">
      <button
        disabled={info.prev === null}
        className="btn btn-warning mr-3"
        onClick={() => action(info.prev)}
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        disabled={info.next === null}
        className="btn btn-warning"
        onClick={() => action(info.next)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
};

export default PagesButtons;
