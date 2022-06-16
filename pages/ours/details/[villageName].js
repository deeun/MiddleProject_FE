import React from 'react'
import Detailslists from '../../../components/Ours/Our/Detailslists'
import { useRouter } from 'next/router';

const add = (props) => {
    const router = useRouter();
   
  return (
    <>
    <Detailslists realName={router.query.villageName} detailslists = {props.ours}/>
    {/* <Details /> */}

    </>
    )
  }

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/program_list/');
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