import React from 'react'
import { useRouter } from 'next/router'

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
    <div class="information">
    <h3>예약번호</h3>
        <input name="searchword" type="text" id="experience_search" placeholder="예약번호를 입력해주세요." />
        <br />
      <button onClick = {()=>CheckReservationInfo()}>조회하기</button>
    </div>
    </>
  )
}

export default CheckReservation