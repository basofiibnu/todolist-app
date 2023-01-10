import React, { useRef, useState, useEffect } from 'react';
import { api } from '../../../constant/api';
import { TLabels, TTasks } from '../../../types/general';
import CreateModal from '../../modal/CreateModal/CreateModal';
import DeleteModal from '../../modal/DeleteModal/DeleteModal';
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
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [taskData, setTaskData] = useState<TTasks>();
  const [taskId, setTaskId] = useState<string>('');
  const [labelName, setLabelName] = useState<string>('');
  const [loadingTask, setLoadingTask] = useState<boolean>(false);

  const isEditTask = async (id: string) => {
    setTaskId(id);
  };

  const isDeleteTask = async (id: string) => {
    setTaskId(id);
    setIsDelete(true);
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
    setLoadingTask(true);
    api
      .getTasks({ label: labelName })
      .then((tasks) => {
        setTasks(tasks);
        setLoadingTask(false);
      })
      .catch((e) => {
        console.error(e);
        setLoadingTask(false);
      });
  }, [showModal, isEdit, isDelete, labelName]);

  useEffect(() => {
    if (!isDelete) {
      getDetailTaskData();
    }
  }, [taskId]);

  console.log(taskId);

  return (
    <div className={styles['container']}>
      <Header toggleModal={() => setShowModal(!showModal)} />
      <div className={styles['content-container']}>
        <div>
          <Sidebar labels={labels} setLabel={setLabelName} />
        </div>
        <div>
          <Content
            loading={loadingTask}
            tasks={tasks}
            isEdit={isEdit}
            setIsDelete={isDeleteTask}
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

      {isDelete && (
        <DeleteModal
          toggle={() => setIsDelete(!isDelete)}
          show={isDelete}
          id={taskId}
        />
      )}
    </div>
  );
};

export default Todolist;
