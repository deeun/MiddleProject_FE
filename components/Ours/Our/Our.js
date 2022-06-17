import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Our.module.css'

const Our = (props) => {

 // useRouter
 const router = useRouter();
 const detail = (e) => {
  // console.log(e.target.value);
  router.push(`/ours/details/${e.target.value}`);
}
 
  return (
    <>
    <ul>
      <div className={styles.mainbox}>
      <div className={styles.listing_text}>
        <h2>{props.villageName}</h2>
          <p className={styles.fontbold}> {props.experienceName}</p>
          <span className={styles.fontbold}>(주소){props.address}</span>&nbsp;&nbsp;
          <span className={styles.fontbold}>(전화번호){props.managerPhone}</span><br/>
          <button className={styles.rsv_btn} value={props.villageName} onClick={detail}>결제하기</button>
          <br/><br/>
      </div>
      </div> 
    </ul>
    </>
  )
}

export default Our