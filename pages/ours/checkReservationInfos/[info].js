import React from 'react'
import { useRouter } from 'next/router';
import CheckReservationInfos from '../../../components/Ours/Our/CheckReservationInfos'

// CheckReservtion에서 CheckReservtionInfo로 연결해주는 api

const add = (props) => {

const router = useRouter();
console.log(router.query.info);
console.log(props);
  return (
    <CheckReservationInfos realName = {router.query.info}
    checkReservationinfos = {props.infos}/>
  )
}

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/accommodation/');
    const infos = await res.json();
    console.log(accommodation);
    return{ //객체를 반환
      props: {infos} //그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      // 그 프로퍼티의 값은 객체
    }
  }catch(error){ //Exception e와 동일
    console.log(error);
    return{props : {}}
  }
}
export default add