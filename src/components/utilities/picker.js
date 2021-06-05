import React, { useState } from "react";
import ModalBody from "./modal-body";
import { StyledSelect } from "./styled-inputs";
import { useHistory } from "react-router-dom";

const Picker = ({ episodes, close }) => {
  const [picked, setPicked] = useState(episodes[0]);
  const history = useHistory();

  const handleConfirm = () => {
    history.push("/episode/" + picked);
    close()
  };

  return (
    <ModalBody
      settings={{
        title: "Episodios",
        closeAction: close,
        confirmButtonAction: handleConfirm,
      }}
    >
      <div className="my-4">
        <StyledSelect label={"Seleccionar Episodio"} onChange={(e) => setPicked(e.target.value)}>
          {episodes.map((number) => (
            <option key={number} value={number}>
              Episodio {number}
            </option>
          ))}
        </StyledSelect>
      </div>
    </ModalBody>
  );
};

export default Picker;
