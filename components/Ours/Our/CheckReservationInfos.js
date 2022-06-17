import React from 'react'
import { useRouter } from 'next/router'

// 예약정보 확인

let infoplace = {};
const CheckReservationInfos = (props) => {
  const checkReservationinfos = props.infos.map(checkReservationinfo => {
    if (props.realName === checkReservationinfos.reservationNumber){
      infoplace = checkReservationinfo;
      } 

    });
    // console.log('Main');
    // router.push('/ours/main')
  return (
    <>
    <div class="information">
      <h1>예약자 정보</h1>
      <h2>{infoplace.reservationNumber}</h2>
      <h2>{infoplace.customerName}</h2>
      <h2>{infoplace.customerPhone}</h2>
      <br/>
        <h4>
        예약자: <br/> 예약인원: <br/> 연락처: <br/> 예약번호: <br/>
        </h4>
        
        <h2>
          예약한 체험정보
        </h2>
        <br/>

        <h4>
        체험명: <br/> 주소: <br/> 연락처: <br/>
        </h4>

      <button onClick = {Main}>홈으로</button>
    </div>
    </>
  )
}

export default CheckReservationInfos