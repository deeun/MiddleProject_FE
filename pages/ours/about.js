import React from 'react'
import About from '../../components/Ours/Our/About'
import Our from '../../components/Ours/Our/Our'
import Ours from '../../components/Ours/Ours'
import MyApp from '../_app'

// 네비게이션바에서 CheckReservtion로 연결해주는 api

const add = (props) => {
  // console.log(props);
  return (
    <Ours ours = {props.ours}/> 
    )
  }

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/api/v1/ours');
    const ours = await res.json();
    console.log(ours);
    return{ //객체를 반환
      props: {ours} //그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      // 그 프로퍼티의 값은 객체
    }
  }catch(error){ //Exception e와 동일
    console.log(error);
    return{props : {}}
  }
}
export default add