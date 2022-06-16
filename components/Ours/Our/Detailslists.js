import React, { useEffect } from 'react'
import styles from '../../Ours/Our/Detailslists.module.css'
import Reservation from '../Our/Reservation'
import Kakaomap from './Kakaomap';

let place = {};
const Detailslists = (props) => {
    const detailslists = props.detailslists.map(detailslist => {
        if (props.realName === detailslist.villageName){
            place = detailslist;
        }
    });
    
    return (
        <>
    <div>
        <div className={styles.flexboxright}>
         <div className={styles.info}>
          <h3>체험명</h3>
          <h2>{place.villageName}</h2>
          <div className={styles.box1}>{place.address}</div><br/>
          <div className={styles.box2}>{place.managerPhone}</div><br/>
          <div className={styles.box3}>{place.experienceName}</div><br/>
        </div>
        <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
        </div>
        </div> 

        <Kakaomap latitude={place.latitude} longitude={place.longitude}/>
        </>
        );
    };
export default Detailslists;
