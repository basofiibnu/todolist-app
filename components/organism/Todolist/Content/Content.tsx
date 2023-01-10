import React, { Fragment } from 'react';
import { TTasks } from '../../../../types/general';
import Card from '../../../atoms/card/Card';
import styles from './Content.module.scss';

type TContent = {
  tasks: TTasks[];
  isEdit: boolean;
  setIsEdit: (id: string, edit: boolean) => Promise<void>;
  setIsDelete: (id: string) => Promise<void>;
  setCloseTask: (id: string) => Promise<void>;

  loading: boolean;
};

const Content = ({
  tasks,
  setIsEdit,
  setIsDelete,
  setCloseTask,
  isEdit,
  loading,
}: TContent) => {
  return (
    <div className={styles['container']}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <Card
                key={task.id}
                id={task.id}
                title={task.content}
                content={task.description}
                labels={task.labels}
                isCompleted={task.isCompleted}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                setIsDelete={setIsDelete}
                setCloseTask={setCloseTask}
              />
            ))
          ) : (
            <p>There is nothing here...</p>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Content;
