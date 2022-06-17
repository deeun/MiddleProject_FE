import React from 'react'
import CheckReservation from '../../../components/Ours/Our/CheckReservation'

// CheckReservtion에서 CheckReservtionInfo로 연결해주는 api

const add = (props) => {
  return (
    <>
    <CheckReservation 
    accommodations = {props.accommodations} />
    </>
  )
}

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/accommodation/');
    const accommodations = await res.json();
    console.log(accommodations);
    return{ //객체를 반환
      props: {accommodations} //그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      // 그 프로퍼티의 값은 객체
    }
  }catch(error){ //Exception e와 동일
    console.log(error);
    return{props : {}}
  }
}
export default add