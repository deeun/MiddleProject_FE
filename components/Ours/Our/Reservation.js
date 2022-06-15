import React from 'react'
import { useRouter } from 'next/router'
import ReservationFinish from './ReservationFinish'
import styles from './Reservation.module.css'

// 체험 예약정보 입력페이지

const Main = (props) => {
  const router = useRouter();
  const ReservationFinish = () => {
    console.log('ReservationFinish');
    router.push('/ours/reservationFinish')
  }
  return (
    <>
    <div className={styles.contentbox}>
      <h1>체험명 SAMPLE</h1>
      <table className={styles.table} border="1">
        <th>구분</th>
        <th>성인</th>
        <th>중it고등학생</th>
        <th>초등학생</th>
        <tr>
          <td>1박</td>
          <td>50,000원</td>
          <td>30,000원</td>
          <td>10,000원</td>
        </tr>
      </table>
      <br/>

      <div>
      일정을 선택해 주세요. <br/>
      <input type="date"></input>
      ~
      <input type="date"></input> <br/>
      <br/><br/>
      </div>

      <div>
      <span>
      참가인원을 선택해주세요 (본인 포함)<br/>
      ※ 미취학 아동, 10명 이상의 단체 방문의 경우 연락 바랍니다.<br/>
      <select name="adultcount">
        <option value="">성인</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>&nbsp;
      <select name="studentcount">
        <option value="">학생</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </span>
      <br/><br/>
      </div>

     
      <br/>
     
     
      <button>예약하기</button>
    </div>
    </>
  )
}

export default Main