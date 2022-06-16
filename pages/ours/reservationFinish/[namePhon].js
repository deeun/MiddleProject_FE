import React from 'react'
import ReservationFinish from '../../../components/Ours/Our/ReservationFinish'
import { useRouter } from 'next/router';
// Reservation에서 ReservationFinish로 연결해주는 api

const add = (props) => {
    const router = useRouter();
    console.log(router.query.inputName);
    console.log(router.query.inputPhone);        
  return (
    <ReservationFinish inputName = {router.query.inputName} inputPhone={router.query.inputPhone}/>
  )
}

export default add