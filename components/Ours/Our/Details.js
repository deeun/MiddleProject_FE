import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../Our/Details.module.css'
import KakaoMap from "../Our/Kakaomap";
import Detailslists from './Detailslists';

let place = {};
// 체험 상세정보
const  Details = (props) => {
  console.log(props, "여기");
  const router = useRouter();
  console.log("진짜 ",props.realName);
        const detailslists = props.detailslists.map(detailslist => {
            // console.log("후보 ",detailslist.villageName);
            if (props.realName == detailslist.experienceName){
                place = detailslist;
            }
            // console.log(place)
            const Reservation = () => {
              console.log('Reservation');
              router.push('/ours/reservation')                       
            }
            return (
                <div className={styles.flexbox}>
                <div className={styles.flexboxleft}>
                <KakaoMap />
                </div>
                <>
                {place.realName}
                </>
                <div className={styles.flexboxright}>
                  <div className={styles.info}>
                    <h3>체험지</h3>
                    <h5>시골냄새 가득 시골마을</h5>
                    <div className={styles.box1}>주소 :   </div><br/>
                    <div className={styles.box2}>연락처 :  {place.managerPhone} </div><br/>
                    <div className={styles.box3}>체험명 :  {place.experienceName}</div><br/>
                  </div>
                  <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
                  </div>
                  </div>
              )
                        
        });
        return (
          <>
             
          </>
        )

  
}

export default Details