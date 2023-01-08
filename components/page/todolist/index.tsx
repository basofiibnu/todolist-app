import React from 'react';
import Header from '../../molecules/header/Header';
import Sidebar from '../../molecules/sidebar/Sidebar';
import Content from '../../organism/Todolist/Content/Content';

import styles from './styles.module.scss';

const Todolist = () => {
  return (
    <div className={styles['container']}>
      <Header />
      <div className={styles['content-container']}>
        <div>
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Todolist;
