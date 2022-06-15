import React from 'react'
import State6 from '../../../components/Ours/Our/states/State6'
import Stateresults from '../../../components/Ours/Our/states/Stateresults'

// 네비게이션바에서 CheckReservtion로 연결해주는 api

const add = (props) => {
  // console.log(props);
  return (
    <>
    <div>
    <State6 />
    <Stateresults stateresults = {props.ours}/>
    </div>
    </>
    )
  }

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/program_list/address/전라북도');
    const ours = await res.json();
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