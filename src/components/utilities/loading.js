import React from "react";
let timeRunning;
const Loading = (props) => {
  let [time, setTime] = React.useState(0);

  React.useEffect(() => {
    timeRunning = setInterval(() => {
      time++;
      setTime(time);
    }, 100);
    return () => {clearInterval(timeRunning)};
  }, []);

  return (
    <div style={{ width: props.width ? `${props.width}vw` : "85vw" }} className="loading center-xy position-absolute flex-column bg-loading">
      <div className="loading-circle center-xy">
        <i className="fas fa-spider display-4" />
      </div>
      <div className="dark-glass-bg mt-5 rounded p-3 text-center">
        <p className="strong-text display-6">{props.title ? props.title : "Procesando..."}</p>
        {time > 100 ? (
          <p className="display-9 text-warning">
            <i className="fas fa-times-circle text-danger mr-2" />
            La operación esta tomando mas tiempo del necesario es posible que tenga que reiniciar la app
          </p>
        ) : (
          <p className="display-9">Esperer por favor... la operación puede tomar unos segundos</p>
        )}
        <p className="display-9 text-center">duración: {(time / 10).toFixed(1)} segundos</p>
      </div>
    </div>
  );
};

export default Loading;
