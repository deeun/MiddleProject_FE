import React from 'react'
import styles from '../Header/Header.module.css'
import { useRouter } from 'next/router';
import About from '../Ours/Our/About';
import Market from '../../components/Ours/Our/Market'

const Header = (props) => {
  const router = useRouter();
  // console.log(props.ours);
  const Main = () => {
    console.log('Main');
    router.push('/ours/main')
  }
          
  const Market = () => {
    console.log('Market');
    router.push('/ours/market')
  }
  const CheckReservation = () => {
    console.log('CheckReservation');
    router.push('/ours/checkReservation')
  }

  const aboutClickHandler = () => {
    router.replace('/ours/about')
    
    return (
      <About ours={props.ours}/>
    )
  }
    
  return (
    <>
      <div id="main-menu">
        <ul className={styles.header}>
          <li><a href="http://localhost:3000/"><img className={styles.logo} src = "/images/logo-removebg.png" /></a></li>
          <li><a href="http://localhost:3000/ours/list">농어촌 체험하기</a></li>
          <li><a href="http://localhost:3000/ours/market">농수산물 구매하기</a></li>
            {/* 농/수산물 구분하는 버튼 만들어야함 */}
          <li><a href="http://localhost:3000/ours/checkReservation">예약 확인</a></li>
          <li><a href="http://localhost:3000/ours/about">체험 소개</a></li>
        
          {/* <li><button onClick={aboutClickHandler}>체험소개</button></li> */}
        </ul>
      </div>
      
    </>
  )
  }
  
export default Header
