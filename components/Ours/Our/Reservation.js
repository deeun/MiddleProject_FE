import React from 'react'
import { useRouter } from 'next/router'
import ReservationFinish from './ReservationFinish'
import styles from './Reservation.module.css'

// 체험 예약정보 입력페이지

const Reservation = (props) => {
  const router = useRouter();
  const ReservationFinish = () => {
    console.log('ReservationFinish');
    router.push('/ours/reservationFinish')
  }
  return (
    <>
  
    <div className={styles.body}>
      <div className={styles.contentbox}>
        <img src="/images/house.png"></img>
        <h1 className={styles.expname}>시골냄새가득 시골마을</h1>
        <table className={styles.table} border="1">
        <thead>
          <tr>
          <th>&nbsp;구분&nbsp;</th>
          <th className={styles.th}>성인</th>
          <th className={styles.th}>&nbsp;중고등학생&nbsp;</th>
          <th className={styles.th}>&nbsp;초등학생&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>&nbsp;1박&nbsp;</td>
            <td className={styles.td}>&nbsp;50,000원&nbsp;</td>
            <td className={styles.td}>&nbsp;30,000원&nbsp;</td>
            <td className={styles.td}>&nbsp;10,000원&nbsp;</td>
          </tr>
          </tbody>
        </table>
        <br/>
        <br/>

        <div className={styles.text1}>
        일정을 선택해 주세요. <br/>
        <input className={styles.dateinput} type="date"></input>
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <input className={styles.dateinput} type="date"></input> <br/>
        <br/><br/>
        </div>

        <div className={styles.text1}>
        참가인원을 선택해주세요 (본인 포함)<br/>
        </div>
        <div className={styles.text2}>
        ※ 미취학 아동, 10명 이상의 단체 방문의 경우 연락 바랍니다.<br/>
        <select className={styles.adultcount} name="adultcount">
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
        </select>&nbsp;&nbsp;
        <select className={styles.studentcount} name="studentcount">
          <option value="">중고등학생</option>
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
        </select>&nbsp;&nbsp;
        <select className={styles.childrencount} name="childrencount">
          <option value="">초등학생</option>
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
        </div>
        <div className={styles.text1}>
        <br/>
        신청자 정보를 입력해주세요. <br/>
        <div className={styles.text2}>
        이름 : <input className={styles.input} id="name" /> &nbsp;&nbsp;
        연락처 : <input className={styles.input} id="phone" />
        </div>
        <button className={styles.reservationbutton} onClick = {ReservationFinish}>예약하기</button>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Reservation