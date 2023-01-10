import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { api } from '../../../constant/api';
import { TLabels } from '../../../types/general';

import styles from './CreateModal.module.scss';

type TCreateModal = {
  show: boolean;
  toggle: () => void;
  labels: TLabels[];
};

const CreateModal = ({ show, toggle, labels }: TCreateModal) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [labelList, setLabelList] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onClickLabel = (labelName: string) => {
    if (labelList.indexOf(labelName) === -1) {
      const arrayLabel = [...labelList, labelName];
      setLabelList(arrayLabel);
    } else {
      const data = labelList.filter(
        (label: string) => label !== labelName
      );
      setLabelList(data);
    }
  };

  const onCreateTask = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const taskData = {
      content: title,
      description: description,
      labels: labelList,
    };

    await api
      .addTask(taskData)
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
      <form onSubmit={onCreateTask}>
        <div className={styles['container']}>
          <div className={styles['action-container']}>
            <div
              className={styles['cancel-container']}
              onClick={toggle}
            >
              <p>Cancel</p>
            </div>
            <div className={styles['button-container']}>
              <button type="submit" className={styles['add-button']}>
                {isSubmitting ? 'Submitting...' : 'Add'}
              </button>
            </div>
          </div>
          <div className={styles['form-container']}>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="add a title..."
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                placeholder="add a description..."
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles['tags-container']}>
            <div className={styles['tags-title']}>Tags</div>
            <div className={styles['tags-list']}>
              {labels &&
                labels.length > 0 &&
                labels.map((label) => (
                  <div
                    className={`${styles['tags-option']} ${
                      labelList.includes(label.name) &&
                      styles['selected']
                    }`}
                    key="label"
                    onClick={() => onClickLabel(label.name)}
                  >
                    <div
                      className={`${styles['tags-color']}`}
                      style={{
                        backgroundColor: label.color,
                        border: `1px solid ${label.color}`,
                        borderRadius: '50%',
                      }}
                    />
                    <p className={styles['tags-name']}>
                      {label.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateModal;
