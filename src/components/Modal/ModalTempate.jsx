import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../contexts/ModelContext";

function ModalTempate() {
  const { handelModal, modalContent, modal } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackDrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackDrop>,
      document.getElementById("modal-root")
    );
  }
  return null;
}

export default ModalTempate;
