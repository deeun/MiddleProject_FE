import React from 'react'
import { useRouter } from 'next/router'
import styles from './ReservationFinish.module.css'

// 체험 예약 왼료 페이지

const Main = (props) => {
  const router = useRouter();
  router.query.name
  const Main = () => {
    console.log('Main');
    router.push('/ours/main')
  }
  return (
    <>
    <div className={styles.reservationinformation}>
      <h2 className={styles.h2}>예약이 완료되었습니다</h2>
        
        <table className={styles.table} border="1">
          <th className={styles.th}>&nbsp;예약자&nbsp;</th>
          <th className={styles.th}>&nbsp;연락처&nbsp;</th>
          <th className={styles.th}>&nbsp;예약번호&nbsp;</th>
          <tr>
            <td className={styles.td}>&nbsp;{props.name}&nbsp;</td>
            <td className={styles.td}>&nbsp;{props.phone}&nbsp;</td>
            <td className={styles.td}>&nbsp;REDFKDJADJ234&nbsp;</td>
            </tr>
        </table>
   
        <br/><br/>
        <h2>
          예약한 체험정보
        </h2>
   

        <br/><br/>
      <button onClick = {Main}>홈으로</button>
    </div>
    </>
  )
}

export default Main