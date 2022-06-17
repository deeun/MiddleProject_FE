import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Stateresult.module.css'

const Stateresult = (props) => {
 // useRouter
 const router = useRouter();
 const reservation = () => {
  router.push('/ours/reservation')
}

  return (
    <>
    <table className={styles.table} border="1">
          <thead>
            <tr>
              <th className = {styles.th1}>구분</th>
              <th className = {styles.th1}>내용</th>
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
        <button onClick={reservation} className={styles.button}>예약하기</button>
        <br/><br/><br/>
        </>

  )
}

export default Stateresult