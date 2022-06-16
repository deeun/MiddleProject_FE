import React from 'react'
import CheckReservation from '../../components/Ours/Our/CheckReservation'
import Oursmarkets from '../../components/Ours/Oursmarkets'

// 네비게이션바에서 CheckReservtion로 연결해주는 api

const add = (props) => {
  // console.log(props);
  return (
    <>
    <CheckReservation />
    <Oursmarkets oursmarkets = {props.oursmarkets}/> 
    </>
    )
  }

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/market');
    const oursmarkets = await res.json();
    console.log(oursmarkets);
    return{ //객체를 반환
      props: {oursmarkets} //그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      // 그 프로퍼티의 값은 객체
    }
  }catch(error){ //Exception e와 동일
    console.log(error);
    return{props : {}}
  }
}
export default add