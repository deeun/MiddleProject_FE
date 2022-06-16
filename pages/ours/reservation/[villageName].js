import React from 'react'
import Reservation from '../../../components/Ours/Our/Reservation'
import { useRouter } from 'next/router';
// Details에서 Reservation로 연결해주는 api

const add = (props) => {
    const router = useRouter();
    console.log(router.query.villageName);
  return (
    <Reservation villageName = {router.query.villageName}/>
  )
}

export default add