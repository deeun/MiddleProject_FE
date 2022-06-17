import React from 'react'
import CheckReservation from '../../components/Ours/Our/CheckReservation'
import Oursaccommodations from '../../components/Ours/Oursaccommodations'
import Oursmarkets from '../../components/Ours/Oursmarkets'

// 네비게이션바에서 CheckReservtion로 연결해주는 api

const add = (props) => {
  // console.log(props);
  return (
  <>
    {/* <CheckReservation /> */}
    <Oursaccommodations accommodation={props.accommodations}/>
    </>
    )
  }
  export const getServerSideProps = async () => {
    try{
      const res = await fetch('http://localhost:8080/accommodation');
      const accommodations = await res.json();
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