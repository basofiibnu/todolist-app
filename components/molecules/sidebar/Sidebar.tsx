import React, { useState } from 'react';
import { TLabels } from '../../../types/general';

import styles from './Sidebar.module.scss';

type TSidebar = {
  labels: TLabels[];
  setLabel: (name: string) => void;
};

const Sidebar = ({ labels, setLabel }: TSidebar) => {
  const [selectedLabel, setSelectedLabel] = useState<number>();
  return (
    <div className={styles['sidebar-container']}>
      {labels && labels.length > 0 ? (
        labels.map((label, i) => (
          <div
            className={`${styles['menu-container']} ${
              i + 1 === selectedLabel && styles['selected']
            }`}
            key={label.id}
            onClick={() => {
              setSelectedLabel(i + 1);
              setLabel(label.name);
            }}
          >
            <div
              className={styles['color']}
              style={{
                backgroundColor: label.color,
                border: `1px solid ${label.color}`,
                borderRadius: '50%',
              }}
            >
              <div className={styles['color-content']} />
            </div>
            <div className={styles['name']}>{label.name}</div>
          </div>
        ))
      ) : (
        <p>Showing labels...</p>
      )}

      <div className={styles['checklist-container']}>
        <input type="checkbox" name="" id="done-task" />
        <label htmlFor="done-task">Hide Done Tasks</label>
      </div>
    </div>
  );
};

export default Sidebar;
