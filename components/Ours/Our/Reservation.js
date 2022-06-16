import React from 'react'
import { useRouter } from 'next/router'
import styles from './Reservation.module.css'
import { useState } from 'react'
import { postAccommAPI } from '../../../lib/api/accommodation'

const Reservation = () => {
  // const router = useRouter();
  
 const [customerName, setCustomerName] = useState('');
 const [customerPhone, setCustomerPhone] = useState('');

//병권 작성중
// const Reservation = (props) => {
//   const router = useRouter();
//   const reservation_click = () => {
//     const inputName = document.getElementById("name").value;
//     const inputPhone = document.getElementById("phone").value;
//     console.log(inputName);
//     console.log(inputPhone);
//     router.push(`/ours/reservationFinish/${inputName}${inputPhone}`)
    
//   }
//   return (  

  
 // 각각의 handler 함수 작성
 const nameSendHandler = (event) => {
    setCustomerName(event.target.value);
  };

  const phoneSendHandler = (event) => {
    setCustomerPhone(event.target.value);
  }

 // addTodo 함수 작성
 const sendReserv = () => {
     const data = {
         customerName : customerName,
         customerPhone : customerPhone,
     }
     console.log(data);

     postAccommAPI(data);

    // router.replace('/');
 }

  return (
    <>
  
    <div className={styles.body}>
      <div className={styles.contentbox}>
        <img src="/images/house.png"></img>
        <h1 className={styles.expname}>{props.villageName}</h1>

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
        {/* <select className={styles.studentcount} name="studentcount">
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
        </select> */}
        </div>
        <div className={styles.text1}>
        <br/>
        신청자 정보를 입력해주세요. <br/>
        <div className={styles.text3}>
        이름 : <input type="text" name="customerName" value={customerName} onChange={nameSendHandler} className={styles.input} id="name" /> &nbsp;&nbsp;
        연락처 : <input type="text" name="customerPhone" value={customerPhone} onChange={phoneSendHandler} className={styles.input} id="phone" />
        </div>
        <button className={styles.reservationbutton} onClick = {sendReserv}>예약하기</button>
        </div>
       </div> 
    </div>
    </>
  )
}

export default Reservation