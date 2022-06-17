import React from 'react'
import { useRouter } from 'next/router'
import styles from './Reservation.module.css'
import { useState } from 'react'
import { postAccommAPI } from '../../../lib/api/accommodation'

const Reservation = (props) => {


  const router = useRouter();
  
 const [customerName, setCustomerName] = useState('');
 const [customerPhone, setCustomerPhone] = useState('');
  
 // 각각의 handler 함수 작성

 const nameSendHandler = (event) => {
    setCustomerName(event.target.value);
  };

  const phoneSendHandler = (event) => {
    setCustomerPhone(event.target.value);
  }

//셀렉트박스
const [customerCount, setCustomerCount] = useState("");
const counts = [1,2,3,4,5,6,7,8,9,10];

const options = counts.map((count) => {
  return <option value={count}>{count}</option>;
});

console.log(customerCount);

const countSendHandler = (event) => {
  setCustomerCount(event.target.value);
};
function generateReservNum(){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var makeReservNum = '';
  for(let i=0; i<10;i++){
      let index = Math.floor(Math.random(10) * alphabet.length);
      makeReservNum += alphabet[index];        
  }

  return makeReservNum;    
}

const reservationNumber = generateReservNum();
console.log(reservationNumber);


 // addTodo 함수 작성
 const sendReserv = () => {
    const inputName = document.getElementById("name").value;
    const inputPhone = document.getElementById("phone").value;
    console.log(inputName);
    console.log(inputPhone);
    router.push({pathname : `/ours/reservationFinish/[inputName][inputPhone][random]`, query:{inputName: inputName, inputPhone :inputPhone, reservationNumber : reservationNumber}})
     const data = {
      customerName : customerName,
      customerPhone : customerPhone,
      customerCount : customerCount,
      reservationNumber : reservationNumber,
         
     }
     console.log(data);

 


  const options = counts.map((count) => {
    return <option value={count}>{count}</option>;
  });

  console.log(customerCount);

  const countSendHandler = (event) => {
    setCustomerCount(event.target.value);
  };
  
  // const [reservationNumber, setReservationNumber] = useState("");
  
  function generateReservNum(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeReservNum = '';
    for(let i=0; i<9;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeReservNum += alphabet[index];        
    }
    return makeReservNum;    
  }

  const reservationNumber = generateReservNum();
  console.log(reservationNumber);
  
  // addTodo 함수 작성
  const sendReserv = () => {
    const data = {
      customerName : customerName,
      customerPhone : customerPhone,
      customerCount : customerCount,
      reservationNumber : reservationNumber,
  }
  console.log(data);
  
  postAccommAPI(data);

 router.replace('/ours/reservationFinish');
}

  return (
    <>
  
    <div className={styles.body}>
      <div className={styles.contentbox}>
        <img src="/images/house.png"></img>
        <h1 className={styles.expname}>{props.villageName}</h1>
        {/* <h1 className={styles.expname}>{props.experienceName}</h1>
        <h1 className={styles.expname}>{props.address}</h1>
        <h1 className={styles.expname}>{props.managerPhone}</h1> */}
        <table className={styles.table} border="1">
        <thead>
          <tr>
          <th>&nbsp;구분&nbsp;</th>
          <th className={styles.th}>성인</th>
          <th className={styles.th}>&nbsp;학생&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>&nbsp;1박&nbsp;</td>
            <td className={styles.td}>&nbsp;50,000원&nbsp;</td>
            <td className={styles.td}>&nbsp;30,000원&nbsp;</td>
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
        <select onChange={countSendHandler} className={styles.adultcount} name="adultcount">
          {options}
        </select>&nbsp;&nbsp;
        </div>
        <div className={styles.text1}>
        <br/>
        신청자 정보를 입력해주세요. <br/>
        <div className={styles.text3}>
        이름 : <input type="text" name="customerName" value={customerName} onChange={nameSendHandler} className={styles.input} id="name" /> &nbsp;&nbsp;
        연락처 : <input type="text" name="customerPhone" value={customerPhone} onChange={phoneSendHandler} className={styles.input} id="phone" />
        </div>
        {/* <button className={styles.reservationbutton} onClick = {reservation_click}>예약하기</button> */}
        <button className={styles.reservationbutton} onClick = {sendReserv}>예약하기</button>
        </div>
       </div> 
    </div>
    </>
  )
}


export default Reservation