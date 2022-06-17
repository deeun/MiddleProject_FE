import React from 'react'
import { useRouter } from 'next/router'
import styles from './ReservationFinish.module.css'

// 체험 예약 왼료 페이지

const Main = (props) => {
  const router = useRouter();
  router.query.name
  const Main = () => {
    router.push('/ours/main')
  }

 

  return (
    <>
    <div className={styles.reservationinformation}>
      {/* <img src = "/images/checked.png" /> */}
      <h2 className={styles.h2}>예약이 완료되었습니다</h2>
        <table className={styles.table} border="1">
          <th className={styles.th}>&nbsp;예약자&nbsp;</th>
          <th className={styles.th}>&nbsp;연락처&nbsp;</th>
          <th className={styles.th}>&nbsp;예약번호&nbsp;</th>
          <tr>
            <td className={styles.td}>&nbsp;{props.inputName}&nbsp;</td>
            <td className={styles.td}>&nbsp;{props.inputPhone}&nbsp;</td>
            <td className={styles.td}>&nbsp;{props.reservationNumber}&nbsp;</td>
            </tr>
        </table>
   
        <br/><br/>
        <h2 className={styles.h2}>
          예약한 체험정보
        </h2>
        <table className={styles.table} border="1">
          <thead>
            <tr>
              <th className = {styles.th}>구분</th>
              <th className = {styles.th}>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className = {styles.th}>마을 이름</th>
              <td className = {styles.td}>{props.villageName}</td>
            </tr>
            <tr>
              <th className = {styles.th}>체험 종류</th>
              <td className = {styles.td}>{props.experienceName}</td>
            </tr>
            <tr>
              <th className = {styles.th}>주소</th>
              <td className = {styles.td}>{props.address}</td>
            </tr>
            <tr>
              <th className = {styles.th}>연락처</th>
              <td className = {styles.td}>{props.managerPhone}</td>
            </tr>
          </tbody>
        </table>
   
        <br/><br/>

        <h2 className={styles.h2}>
          결제 정보
        </h2>
        <span className = {styles.text}>
          결제는 무통장 입금만 가능합니다. <br/>
          예약자 성함으로 입금 주시면 확인 후 유선 연락 드리오니 참고 바랍니다. <br/>
        </span>
        <br/>
        <table className={styles.table} border="1">
          <th className={styles.th}>&nbsp;은행&nbsp;</th>
          <th className={styles.th}>&nbsp;계좌번호&nbsp;</th>
          <th className={styles.th}>&nbsp;예금주&nbsp;</th>
          <tr>
            <td className={styles.td}>&nbsp;국민은행&nbsp;</td>
            <td className={styles.td}>&nbsp;318002-04-036760&nbsp;</td>
            <td className={styles.td}>&nbsp;우리 것 대한민국 농어촌 체험 사업단&nbsp;</td>
            </tr>
        </table>

      <button className={styles.button} onClick = {Main}>홈으로</button>
    </div>
    </>
  )
}

export default Main