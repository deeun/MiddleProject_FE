import React from 'react'
import { useRouter } from 'next/router'
import Oursmarket from '../../Ours/Our/Oursmarket'

// 예약 확인을 위한 번호입력 페이지

const Main = (props) => {
  const router = useRouter();
  const CheckReservationInfo = () => {
    console.log('CheckReservationInfo');
    router.push('/ours/checkReservationInfo')
   const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'
   const  tossPayments = TossPayments(clientKey)
  }
  return (
    <>
    <div className="information">
    <h3>예약번호</h3>
        <input name="searchword" type="text" id="experience_search" placeholder="예약번호를 입력해주세요." />
        <br />
       
      <a href =''>결제하기</a>
      <script src="https://js.tosspayments.com/v1"></script>

        {/* <Oursmarket /> */}
      <button onClick = {CheckReservationInfo}>조회하기</button>
    </div>
    </>
  )
}

export default Main