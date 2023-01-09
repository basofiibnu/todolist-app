import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.scss';

type TCard = {
  content: string;
};

const Card = ({ content }: TCard) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-title__container']}>
        <p className={styles['title']}>Title</p>
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
          <div />
          <div />
        </div>
        <div className={styles['check-card']}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Done</label>
        </div>
      </div>

      {showOptions && (
        <div className={styles['options-container']}>
          <div className={styles['options-item']}>Edit</div>
          <div className={styles['options-item']}>Delete</div>
        </div>
      )}
    </div>
  );
};

export default Card;
