import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react'
import styles from '../../Ours/Our/Detailslists.module.css'
import Kakaomap from './Kakaomap';

let place = {};
const Detailslists = (props) => {
    const detailslists = props.detailslists.map(detailslist => {
        if (props.realName === detailslist.villageName){
            place = detailslist;
        }
    });

const router = useRouter();
const Reservation = () => {
    router.push('/ours/reservation')                       
}
    
return (
    <>
    <div className={styles.main}>
        <div className={styles.area1}>
            <h3>체험명</h3>
            <h2>{place.villageName}</h2>
            {place.experienceName}<br/><br/>
            {place.address}<br/>
            {place.managerPhone}<br/><br/><br/>
            <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
            </div>
            <Kakaomap latitude={place.latitude} longitude={place.longitude}/>

        </div>
        </>
        );
    };
export default Detailslists;
