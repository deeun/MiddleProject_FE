import React from 'react'
import Ours from '../../components/Ours/Ours'
import ExperienceList from '../../components/Ours/Our/ExperienceList'

const add = (props) => {
  // console.log(props);
  return (
    <>
    <ExperienceList />
    <Ours ours = {props.ours}/> 
 
    </>
    )
  }

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/program_list');
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