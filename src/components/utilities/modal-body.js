import React from "react";

const ModalBody = (props) => {
  const windowWrapper = React.createRef();

  const {
    closeAction,
    lockWindow,
    lockStatus,
    lockAction,
    cancelButtonTitle,
    extraButtonTitle,
    extraButtonColor,
    extraButtonAction,
    confirmButtonTitle,
    confirmButtonAction,
    hideButtons,
    title,
  } = props.settings;

  const closeWindow = () => {
    windowWrapper.current.className += " show-down";
    setTimeout(() => {
      closeAction();
    }, 250);
  };

  return (
    <div className="modal-outside">
      <div ref={windowWrapper} className="modal-window lines-bg">
        <div className="d-flex justify-content-between w-100 bg-dark p-3">
          <h5 className="flex-1 strong-text m-0">{title}</h5>
          {lockWindow && (
            <i
              className={`lock-button fas fa-${lockStatus ? "lock" : "lock-open"} mr-2`}
              onClick={lockAction}
            />
          )}

          <i className="close-button fas fa-times" onClick={closeWindow} />
        </div>
        <div className="p-3">
          {props.children}
          {!hideButtons && (
            <div className="d-flex w-100 mt-3">
              <button className="flex-1 mr-2 btn btn-light" onClick={closeWindow}>
                {cancelButtonTitle ? cancelButtonTitle : "CANCELAR"}
              </button>
              {extraButtonTitle && (
                <button
                  className={`flex-1 mr-2 btn btn-${extraButtonColor ? extraButtonColor : "light"}`}
                  onClick={extraButtonAction}
                >
                  {extraButtonTitle}
                </button>
              )}
              <button className="flex-1 btn btn-success" onClick={confirmButtonAction}>
                {confirmButtonTitle ? confirmButtonTitle : "CONFIRMAR"}
              </button>
            </div>
          )}
          <p className="text-center text-secondary mt-3">
            (*) Los campos indicados deben ser completados
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
