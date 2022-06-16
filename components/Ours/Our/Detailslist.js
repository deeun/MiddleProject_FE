import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Our.module.css'
import Reservation from './Reservation'

const Detailslist = (props) => {
 console.log("똑똑", props);

 
 // useRouter
 const router = useRouter();
 const detail = () => {
  router.push('/ours/details')
}

  return (
    <div className={styles.flexboxright}>
        <div className={styles.info}>
          <h3>체험지 {props.address} </h3>
        </div>
        <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
        </div>
  )
}

export default Detailslist