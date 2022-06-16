import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../Our/Details.module.css'
import KakaoMap from "../Our/Kakaomap";
import Detailslists from './Detailslists';


// 체험 상세정보

const  Details = (props) => {
  console.log(props, "여기");
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
          <h3>체험지</h3>
          <h5>시골냄새 가득 시골마을</h5>
          <div className={styles.box1}>주소</div><br/>
          <div className={styles.box2}>연락처</div><br/>
          <div className={styles.box3}>체험명</div><br/>
        </div>
        <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
        </div>
        </div>
        {/* <Detailslists /> */}

        
    </>
  )
}

export default Details