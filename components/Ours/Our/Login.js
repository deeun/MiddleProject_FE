import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../Ours/Our/Login.module.css'

// 농수산물 구매하기

const Login = (props) => {
  const router = useRouter();
  
  return (
    <>
    <div className={styles.body}>
      <div className={styles.flexbox}>
        <div className={styles.flexboxleft}>
          <div>
            <br/>
            <h2>간편 로그인</h2>
            <div className={styles.mapareaText1}>
            네이버 로그인 및
            <br />
            카카오톡 로그인이 가능합니다.
            </div>
            <br/>
            <button className={styles.search_button} >네이버 로그인</button> &nbsp;&nbsp;
            <button className={styles.search_button} >카카오톡 로그인</button>
          </div>
        </div>
        
        <div className={styles.flexboxright}>
          <div className={styles.mapareaTextWhole}>
            <div className={styles.mapareaText}>
            <br/>
            <h2>비회원으로 이용하기</h2>
            </div>

            <div className={styles.mapareaText2}>
              로그인 없이 체험예약이 가능합니다.
              <br/><br/>
              비회원 예약정보 확인은
              <br/>
              [예약 확인] 탭을 눌러 주세요.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login