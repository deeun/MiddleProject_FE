import React from 'react'
import Stateresult from './Stateresult';
import styles from './State1.module.css';

const State1 = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.title}>
      <img src = "/images/land.png" />
      <h1>
      <span className={styles.title2}>
        경기도&nbsp;
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

export default State1

