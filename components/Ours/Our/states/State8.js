import React from 'react'
import Stateresult from './Stateresult';
import styles from './State8.module.css';

const State8 = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.title}>
      <img src = "/images/land.png" />
      <h1>
      <span className={styles.title2}>
        경상북도&nbsp;
      </span>
      <span>
        농어촌 체험하기
      </span>
      </h1>
      <br/>
      </div>
    </>
  )
}

export default State8