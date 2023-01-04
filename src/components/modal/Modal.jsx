import React from "react";
import ImageModal from "./components/image_modal/ImageModal";
import MessageModal from "./components/message_modal/MessageModal";
import {
  ModalContainer,
  ModalButton,
  ModalContent,
  ModalFooter,
} from "./Modal.style";

export function ResponseModal({ code, message, handleClose }) {
  return (
    <ModalContainer>
      <ModalContent className="Modal Container">
        {code && <ImageModal code={code} />}
        <MessageModal message={message} />
        <ModalButton className="Close Button" onClick={handleClose}>
          Tutup
        </ModalButton>
      </ModalContent>
    </ModalContainer>
  );
}

export function ConfirmationModal({ message, handleOk, handleCancel }) {
  return (
    <ModalContainer>
      <ModalContent>
        <MessageModal message={message} />
        <ModalFooter>
          <ModalButton onClick={handleCancel}>Cancel</ModalButton>
          <ModalButton onClick={handleOk}>Ok</ModalButton>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
}
