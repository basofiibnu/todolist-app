import React, { useRef, ReactNode } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

type TModalBox = {
  show: boolean;
  toggle: () => void;
};

const ModalBox = ({ show, toggle }: TModalBox) => {
  const modal = useRef(null);
  return (
    <div>
      <Modal ref={modal} isOpen={show} toggle={toggle}></Modal>
    </div>
  );
};

export default ModalBox;
