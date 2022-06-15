import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Our.module.css'
import Details from './Details'

const Our = (props) => {

 // useRouter
 const router = useRouter();
 const detail = () => {
  router.push('/ours/details')
}
 
  return (
    <li>
      <div className={styles.listing_text}>
              <h3>{props.villageName}</h3>
              <p className={styles.listing_textclass}> {props.experienceName}</p>
              <p><span className={styles.fontbold}>(주소)</span>{props.address}&nbsp;&nbsp;
              <span className={styles.fontbold}>(전화번호)</span>{props.managerPhone}<br/>
              </p>
          </div> 
          <div className={styles.rsv_btn}>
              <a className={styles.readmore} onClick = {detail}>예약하기</a>
              <a href="/temple_info.asp?t_id=tsyong" className={styles.temple_link}  target="_blank">숙박정보보기</a>
          </div>
    </li>
  )
}

export default Our