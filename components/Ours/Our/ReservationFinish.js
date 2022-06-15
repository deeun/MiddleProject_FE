import React from 'react'
import { useRouter } from 'next/router'

// 체험 예약 왼료 페이지

const Main = (props) => {
  const router = useRouter();
  const Main = () => {
    console.log('Main');
    router.push('/ours/main')
  }
  return (
    <>
    <div class="information">
      <h1>예약이 완료되었습니다</h1>
      <br/>
        <h4>
        예약자: <br/> 예약인원: <br/> 연락처: <br/> 예약번호: <br/>
        </h4>
        
        <h2>
          예약한 체험정보
        </h2>
        <br/>

        <h4>
        체험명: <br/> 주소: <br/> 연락처: <br/>
        </h4>

      <button onClick = {Main}>홈으로</button>
    </div>
    </>
  )
}

export default Main