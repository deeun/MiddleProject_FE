import React from 'react'
import { useRouter } from 'next/router'
import styles from '../Our/Details.module.css'
// import styles from '../../Layout/Main/'

// 체험 상세정보

const Main = (props) => {
  const router = useRouter();
  const Reservation = () => {
    console.log('Reservation');
    router.push('/ours/reservation')
  }
  return (
    <>
    <div className={styles.flexbox}>

      <div className={styles.flexboxleft}>
        <div class="img" id="map">
        <img className={styles.map} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOScfb_rNQSNSKmAG4YhNvRdSyBkVzjkAKw&usqp=CAU" />
        </div>
      </div>
      
      <div className={styles.flexboxright}>
        <div className={styles.info}>
          <h3>체험지 01. 시골마을</h3>
          <h5>시골냄새 가득 시골마을</h5>
          <div className={styles.box1}>주소</div><br/>
          <div className={styles.box2}>연락처</div><br/>
          <div className={styles.box3}>체험명</div><br/>
        
        </div>
        <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
        </div>
        

        </div>

        
    </>
  )
}

export default Main