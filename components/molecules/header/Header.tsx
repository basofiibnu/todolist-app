import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

type THeader = {
  toggleModal: () => void;
};

const Header = ({ toggleModal }: THeader) => {
  return (
    <div className={styles['container']}>
      <div className={styles['logo-container']}>
        <p className={styles['logo']}>Logo</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ fontSize: 21, color: ' var(--light-black)' }}
          onClick={toggleModal}
        />
      </div>
    </div>
  );
};

export default Header;
