import React from 'react'
import ReservationFinish from '../../../components/Ours/Our/ReservationFinish'
import { useRouter } from 'next/router';
// Reservation에서 ReservationFinish로 연결해주는 api

const add = (props) => {
    const router = useRouter();   
  return (
    <ReservationFinish inputName = {router.query.inputName}
     inputPhone={router.query.inputPhone}
      reservationNumber={router.query.reservationNumber}
      villageName={router.query.villageName}
      experienceName={router.query.experienceName}
      address={router.query.address}
      managerPhone={router.query.managerPhone}   
    />
  )
}

export default add