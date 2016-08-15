import React from 'react'

import styles from './index.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className='logo'>Test</div>
        <ul className='menu'>
          <li><a>Home</a></li>
        </ul>
      </div>
    );
  }
};

