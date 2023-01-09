import React from 'react';
import { Modal } from 'reactstrap';

import styles from './CreateModal.module.scss';

type TCreateModal = {
  show: boolean;
  toggle: () => void;
};

const CreateModal = ({ show, toggle }: TCreateModal) => {
  return (
    <Modal
      isOpen={show}
      toggle={toggle}
      style={{ border: 'none', outline: 'none', borderRadius: 30 }}
    >
      <div className={styles['container']}>
        <div className={styles['action-container']}>
          <div className={styles['cancel-container']}>
            <p>Cancel</p>
          </div>
          <div className={styles['button-container']}>
            <button className={styles['add-button']}>Add</button>
          </div>
        </div>
        <div className={styles['form-container']}>
          <div>
            <label>Title</label>
            <input type="text" placeholder="add a title..." />
          </div>
          <div>
            <label>Description</label>
            <textarea placeholder="add a description..." rows={5} />
          </div>
        </div>
        <div className={styles['tags-container']}>
          <div className={styles['tags-title']}>Tags</div>
          <div className={styles['tags-list']}>
            <div className={styles['tags-option']}>
              <div className={styles['tags-color']} />
              <p className={styles['tags-name']}>Work</p>
            </div>

            <div className={styles['tags-option']}>
              <div className={styles['tags-color']} />
              <p className={styles['tags-name']}>study</p>
            </div>

            <div className={styles['tags-option']}>
              <div className={styles['tags-color']} />
              <p className={styles['tags-name']}>entertainment</p>
            </div>

            <div className={styles['tags-option']}>
              <div className={styles['tags-color']} />
              <p className={styles['tags-name']}>family</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
