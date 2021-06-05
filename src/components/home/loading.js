import React from "react";

const Loading = () => {
  return (
    <div className="center-all flex-1 h-100">
      <div className="spin">
        <i className="display-3 fas fa-spinner text-primary" />
      </div>
    </div>
  );
};

export default Loading;
