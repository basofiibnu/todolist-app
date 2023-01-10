import React from 'react';
import { TTasks } from '../../../../types/general';
import Card from '../../../atoms/card/Card';
import styles from './Content.module.scss';

type TContent = {
  tasks: TTasks[];
};

const Content = ({ tasks }: TContent) => {
  return (
    <div className={styles['container']}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.content}
            content={task.description}
            labels={task.labels}
            isCompleted={task.isCompleted}
          />
        ))
      ) : (
        <p>Showing tasks...</p>
      )}
    </div>
  );
};

export default Content;
