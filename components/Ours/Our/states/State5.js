import React from 'react'
import Stateresult from './Stateresult';
import styles from './State5.module.css';

const State5 = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.title}>
      <img src = "/images/land.png" />
      <h1>
      <span className={styles.title2}>
        전라남도&nbsp;
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

export default State5

