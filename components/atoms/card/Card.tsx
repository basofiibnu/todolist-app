import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.scss';
import EditModal from '../../modal/EditModal/EditModal';

type TCard = {
  content: string;
  title: string;
  isCompleted: boolean;
  id: string;
  labels: string[];
  isEdit: boolean;
  setIsEdit: (id: string, edit: boolean) => Promise<void>;
};

const Card = ({
  content,
  id,
  labels,
  isCompleted,
  title,
  isEdit,
  setIsEdit,
}: TCard) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const labelColor = (name: string) => {
    switch (name) {
      case 'routine':
        return 'orange';
      case 'daily':
        return 'magenta';
      case 'meeting':
        return 'lavender';
      case 'todo':
        return 'salmon';
      case 'work':
        return 'teal';
      case 'personal':
        return 'grey';
      case 'read':
        return 'green';

      default:
        return 'black';
    }
  };

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-title__container']}>
        <p className={styles['title']}>{title}</p>
        <div
          className={styles['options']}
          onClick={() => setShowOptions(!showOptions)}
        >
          <FontAwesomeIcon
            icon={faEllipsisH}
            style={{
              fontSize: '1.2rem',
              color: 'var(--light-black)',
            }}
          />
        </div>
      </div>
      <div className={styles['content-container']}>
        <p>{content}</p>
      </div>
      <div className={styles['tag-container']}>
        <div className={styles['tag-list']}>
          {labels &&
            labels.length > 0 &&
            labels.map((label) => (
              <div
                key={label}
                className={styles['label-tag-container']}
              >
                <div
                  style={{
                    backgroundColor: labelColor(label),
                    border: `1px solid ${labelColor(label)}`,
                  }}
                ></div>
              </div>
            ))}
        </div>
        {!isCompleted && (
          <div className={styles['check-card']}>
            <input type="checkbox" id={`task-${id}`} />
            <label htmlFor={`task-${id}`}>Done</label>
          </div>
        )}
      </div>

      {showOptions && (
        <div className={styles['options-container']}>
          <div
            className={styles['options-item']}
            onClick={() => {
              setShowOptions(!showOptions);
              setIsEdit(id, isEdit);
            }}
          >
            Edit
          </div>
          <div className={styles['options-item']}>Delete</div>
        </div>
      )}
    </div>
  );
};

export default Card;
