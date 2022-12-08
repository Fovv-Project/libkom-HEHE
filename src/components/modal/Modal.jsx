import React, { useState } from 'react';
import ImageModal from './components/image_modal/ImageModal';
import MessageModal from './components/message_modal/MessageModal';
import { ModalContainer, CloseButton } from './Modal.style';

function Modal({ code, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => setIsVisible(false);
  return (
    isVisible && (
      <ModalContainer className="Modal Container">
        <ImageModal code={code} />
        <MessageModal message={message} />
        <CloseButton className="Close Button" onClick={onClose}>
          Tutup
        </CloseButton>
      </ModalContainer>
    )
  );
}

export default Modal;
