import React, { useState } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [first, setfirst] = useState<boolean>(false);
  return (
    <div className={styles['sidebar-container']}>
      <div className={styles['menu-container']}>
        <div className={styles['color']}>
          <div className={styles['color-content']} />
        </div>
        <div className={styles['name']}>Sidebar Content</div>
      </div>

      <div className={styles['menu-container']}>
        <div className={styles['color']}>
          <div className={styles['color-content']} />
        </div>
        <div className={styles['name']}>Sidebar Content</div>
      </div>

      <div className={styles['menu-container']}>
        <div className={styles['color']}>
          <div className={styles['color-content']} />
        </div>
        <div className={styles['name']}>Sidebar Content</div>
      </div>

      <div className={styles['menu-container']}>
        <div className={styles['color']}>
          <div className={styles['color-content']} />
        </div>
        <div className={styles['name']}>Sidebar Content</div>
      </div>

      <div className={styles['checklist-container']}>
        <input type="checkbox" name="" id="done-task" />
        <label htmlFor="done-task">Hide Done Tasks</label>
      </div>
    </div>
  );
};

export default Sidebar;
