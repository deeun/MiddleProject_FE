import React from 'react'
import Stateresult from './Stateresult';
import styles from './State9.module.css';

const State9 = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.title}>
      <img src = "/images/land.png" />
      <h1>
      <span className={styles.title2}>
        제주도&nbsp;
      </span>
      <span>
        농어촌 체험하기
      </span>
      </h1>
      <br/>
      </div>
       <Stateresult />
    </>
  )
}

export default State9