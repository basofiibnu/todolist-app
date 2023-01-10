import React, { useRef, useState, useEffect } from 'react';
import { api } from '../../../constant/api';
import { TLabels, TTasks } from '../../../types/general';
import CreateModal from '../../modal/CreateModal/CreateModal';
import EditModal from '../../modal/EditModal/EditModal';
import Header from '../../molecules/header/Header';
import Sidebar from '../../molecules/sidebar/Sidebar';
import Content from '../../organism/Todolist/Content/Content';

import styles from './styles.module.scss';

const Todolist = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [labels, setLabels] = useState<TLabels[]>([]);
  const [tasks, setTasks] = useState<TTasks[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [taskData, setTaskData] = useState<TTasks>();
  const [taskId, setTaskId] = useState<string>('');

  const isEditTask = async (id: string, edit: boolean) => {
    setTaskId(id);
  };

  const getDetailTaskData = async () => {
    if (taskId) {
      await api
        .getTask(taskId)
        .then((data) => {
          setTaskData(data);
          if (!isEdit) {
            setIsEdit(true);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    // to get all task label
    api
      .getLabels()
      .then((labels) => {
        setLabels(labels);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    // to get all active task
    api
      .getTasks()
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [showModal, isEdit]);

  useEffect(() => {
    getDetailTaskData();
  }, [taskId]);

  return (
    <div className={styles['container']}>
      <Header toggleModal={() => setShowModal(!showModal)} />
      <div className={styles['content-container']}>
        <div>
          <Sidebar labels={labels} />
        </div>
        <div>
          <Content
            tasks={tasks}
            isEdit={isEdit}
            setIsEdit={isEditTask}
          />
        </div>
      </div>

      {showModal && (
        <CreateModal
          show={showModal}
          toggle={() => setShowModal(!showModal)}
          labels={labels}
        />
      )}

      {isEdit && taskData && (
        <EditModal
          labels={labels}
          show={isEdit}
          toggle={() => setIsEdit(!isEdit)}
          data={taskData}
        />
      )}
    </div>
  );
};

export default Todolist;
