import React from 'react'
import { useRouter } from 'next/router'
import { getAccommAPI } from '../../../lib/api/accommodation'
import { useState } from 'react'
import styles from '../../Ours/Our/CheckReservation.module.css'

// 예약 확인을 위한 번호입력 페이지

const CheckReservation = (props) => {
  const router = useRouter();
  const CheckReservationInfo = () => {
    const info = document.getElementById('experience_search').value;
    router.push({pathname :`/ours/checkReservationInfos/[info]`
    ,query : {info : info}})
  }

  return (
    <>
    <div className={styles.information}>
    <div>
    <img src="/images/magnifier.png" />
    <h2>예약내용 조회하기</h2>
    <div className={styles.text}>
      예약번호를 통해 체험 예약 조회가 가능합니다. <br/>
      아래 빈칸에 예약번호를 입력해주세요. <br/><br/>
      <br/>
      ※ 예약번호를 모르시는 분은 아래로 연락 바랍니다. <br/>
      <div className={styles.text2}>
      이메일 : ours@contact.us <br/>
      전화번호 : 02-9292-1000
      <br/><br/>
      </div>
    </div>
        <input type="text" className={styles.input} name="reservationNumber" value={inputNumber} onChange={revNumSendHandler} 
        placeholder="예약번호를 입력해주세요." />
        <br/><br/><br/>
      <button className={styles.button} onClick = {()=>CheckReservationInfo()}>조회하기</button>
    </div>

    </div>
    </>
  )
}

export default CheckReservation