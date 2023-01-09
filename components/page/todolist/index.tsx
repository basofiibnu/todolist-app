import React, { useRef, useState } from 'react';
import CreateModal from '../../modal/CreateModal/CreateModal';
import ModalBox from '../../modal/Modal';
import Header from '../../molecules/header/Header';
import Sidebar from '../../molecules/sidebar/Sidebar';
import Content from '../../organism/Todolist/Content/Content';

import styles from './styles.module.scss';

const Todolist = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className={styles['container']}>
      <Header toggleModal={() => setShowModal(!showModal)} />
      <div className={styles['content-container']}>
        <div>
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div>

      {showModal && (
        <CreateModal
          show={showModal}
          toggle={() => setShowModal(!showModal)}
        />
      )}
    </div>
  );
};

export default Todolist;
