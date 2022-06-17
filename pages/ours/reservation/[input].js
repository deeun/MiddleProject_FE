import React from 'react'
import Reservation from '../../../components/Ours/Our/Reservation'
import { useRouter } from 'next/router';
// Details에서 Reservation로 연결해주는 api

const add = (props) => {
    const router = useRouter();
    console.log("안녕학세요"+router.query.villageName);
    console.log("안녕학세요"+router.query.experienceName);
  return (
    <Reservation 
    villageName = {router.query.villageName}
    experienceName = {router.query.experienceName}
    address = {router.query.address}
    managerPhone = {router.query.managerPhone}
    />
  )
}

export default add