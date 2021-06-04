import React, { useState } from "react";
import Pagination from "./pagination";

const defaultStyle = {
  height: "100%",
  padding: "10px",
  backgroundColor: "#505050",
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const StyledTable = ({
  data,
  headers = [],
  children,
  title,
  theadDark,
  style,
  properties = [],
  setRange,
  length = 1,
  pagginate,
}) => {
  const [localRange, setLocalRange] = useState({ min: 0, max: 0 });

  const rangeHandler = children && setRange ? setRange : setLocalRange;

  const Row = (idx, element) => {
    return (
      <tr key={idx}>
        <td style={{ textAlign: "center" }}>{idx + 1}</td>
        {properties.map((property, s_idx) => (
          <td key={s_idx} style={typeof headers[idx] !== "string" ? headers[idx] : {}}>{element[property]}</td>
        ))}
      </tr>
    );
  };

  return (
    <div style={{ ...defaultStyle, ...style }} className="p-3 overflow-hidden">
      {title && <h5 className="strong-text text-success">{title}</h5>}
      <div className="scroll-area flex-1">
        <table className="w-100">
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "center",
                  backgroundColor: theadDark ? "#303030" : "#81c91f",
                  color: theadDark ? "#cfcfcf" : "#303030",
                }}
              >
                #
              </th>
              {headers.map((th, idx) => (
                <th
                  key={idx}
                  style={{
                    backgroundColor: theadDark ? "#303030" : "#81c91f",
                    color: theadDark ? "#cfcfcf" : "#303030",
                    ...th.style,
                  }}
                >
                  {typeof th !== "string" ? th.title : th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {children
              ? children
              : data.map((element, idx) => {
                  if (pagginate) {
                    if (idx >= localRange.min && idx < localRange.max) {
                      return Row(idx, element);
                    }
                  } else {
                    return Row(idx, element);
                  }
                })}
          </tbody>
        </table>
      </div>
      {pagginate && (
        <Pagination
          length={!children ? data.length : length}
          setRange={(min, max) => rangeHandler({ min: min, max: max })}
        />
      )}
    </div>
  );
};

export default StyledTable;
