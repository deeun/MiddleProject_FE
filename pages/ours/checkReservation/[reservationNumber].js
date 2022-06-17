import React from 'react'
import CheckReservation from '../../../components/Ours/Our/CheckReservation';
import { useRouter } from 'next/router';

const add = (props) => {
    const router = useRouter();       
  
    return (
    <>
    <CheckReservation inputNumber={router.query.reservationNumber} />
    </>
  )
}