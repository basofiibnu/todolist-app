import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { api } from '../../../constant/api';
import { TLabels } from '../../../types/general';

import styles from './DeleteModal.module.scss';

type TDeleteModal = {
  show: boolean;
  id: string;
  toggle: () => void;
};

const DeleteModal = ({ id, show, toggle }: TDeleteModal) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onDeleteTask = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    await api
      .deleteTask(id)
      .then((data) => {
        setIsSubmitting(false);
      })
      .then(() => {
        toggle();
      })
      .catch((e) => console.error(e));
  };

  return (
    <Modal
      isOpen={show}
      toggle={toggle}
      style={{ border: 'none', outline: 'none', borderRadius: 30 }}
    >
      <form onSubmit={onDeleteTask}>
        <div className={styles['container']}>
          <div className={styles['action-container']}>
            <div
              className={styles['cancel-container']}
              onClick={toggle}
            >
              <p>Cancel</p>
            </div>
            <div className={styles['button-container']}>
              <button
                type="submit"
                className={styles['delete-button']}
              >
                {isSubmitting ? 'Submitting...' : 'Delete'}
              </button>
            </div>
          </div>
          <div className={styles['form-container']}>
            <div>
              <label>
                Are you sure you want to delete this task?
              </label>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteModal;
