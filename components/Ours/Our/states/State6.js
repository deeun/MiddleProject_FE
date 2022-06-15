import React from 'react'
import Stateresult from './Stateresult';
import styles from './State6.module.css';

const State6 = (props) => {
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

export default State6

