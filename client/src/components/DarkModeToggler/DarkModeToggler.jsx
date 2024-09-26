import React from 'react';
import styles from './DarkModeToggler.module.scss';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const DarkModeToggler = ({ setThemeColor, okaidia, githubLight }) => {
  const changeTheme = () => {
    setThemeColor((prevValue) =>
      prevValue === okaidia ? githubLight : okaidia
    );
  };
  return (
    <div className={styles.darkModeContainer}>
      <p>Light</p>
      <label className={styles.switch}>
        <input type='checkbox' onChange={changeTheme} />
        <span className={styles.slider}>
          <img src={sun} className={styles.sun} alt='sun' />
          <img src={moon} className={styles.moon} alt='moon' />
        </span>
      </label>
      <p>Dark</p>
    </div>
  );
};

export default DarkModeToggler;
