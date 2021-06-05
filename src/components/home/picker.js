import React, { useState } from "react";
import ModalBody from "../utilities/modal-body";
import { StyledSelect } from "../utilities/styled-inputs";

const Picker = ({ episodes, close }) => {
  console.log(episodes);
  return (
    <ModalBody settings={{ title: "Episodios", closeAction: close }}>
      <div className="my-4">
        <StyledSelect label={"Seleccionar Episodio"}>
          {episodes.map((page) => (
            <option key={page} value={page}>
              Episodio {page}
            </option>
          ))}
        </StyledSelect>
      </div>
    </ModalBody>
  );
};

export default Picker;
