import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  width: 567px;
  height: 279px;
  margin: auto;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 22px;
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

export const ModalButton = styled.button`
  background-color: #ffbe55;
  width: 127.42px;
  height: 44.14px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: #000000;
`;
