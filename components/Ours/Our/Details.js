import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../Our/Details.module.css'
import KakaoMap from "../Our/Kakaomap";


// 체험 상세정보

const  Details = (props) => {
  const router = useRouter();
  const Reservation = () => {
    console.log('Reservation');
    router.push('/ours/reservation')                       
  }

    return (
      <>
    <div className={styles.flexbox}>

      <div className={styles.flexboxleft}>
      <KakaoMap />
      </div>
      
      <div className={styles.flexboxright}>
        <div className={styles.info}>
          <h1>체험지 01. 시골마을</h1>
          <h3>시골냄새 가득 시골마을</h3>
          <div className={styles.box1}><box>주소: </box></div><br/>
          <div className={styles.box2}><box>연락처: </box></div><br/>
          <div className={styles.box3}><box>체험명: </box></div><br/>
        </div>
        
          <button className={styles.btn} onClick = {Reservation}>예약하기</button>
             
        </div>
        

        </div>

        
    </>
  )
}

export default Details