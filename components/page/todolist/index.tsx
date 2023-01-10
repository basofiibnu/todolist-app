import React, { useRef, useState, useEffect } from 'react';
import { api } from '../../../constant/api';
import { TLabels } from '../../../types/general';
import CreateModal from '../../modal/CreateModal/CreateModal';
import ModalBox from '../../modal/Modal';
import Header from '../../molecules/header/Header';
import Sidebar from '../../molecules/sidebar/Sidebar';
import Content from '../../organism/Todolist/Content/Content';

import styles from './styles.module.scss';

const Todolist = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [labels, setLabels] = useState<TLabels[]>([]);

  useEffect(() => {
    // to get all task label
    api
      .getLabels()
      .then((labels) => {
        setLabels(labels);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(labels);
  return (
    <div className={styles['container']}>
      <Header toggleModal={() => setShowModal(!showModal)} />
      <div className={styles['content-container']}>
        <div>
          <Sidebar labels={labels} />
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
