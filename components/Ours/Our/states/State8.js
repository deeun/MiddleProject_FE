import React from 'react'
import Stateresult from './Stateresult';
import styles from './State8.module.css';

const State8 = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.title}>
      <h2>농어촌 체험이란</h2>
      </div>
       
       <Stateresult />
    </>
  )
}

export default State8