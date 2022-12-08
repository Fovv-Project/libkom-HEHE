import React from 'react';
import { MessageWrapper, Message } from './MessageModal.style';

function MessageModal({ message }) {
  return (
    <MessageWrapper className="Message Wrapper">
      <Message className="Message">{message}</Message>
    </MessageWrapper>
  );
}

export default MessageModal;
