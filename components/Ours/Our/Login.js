import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../Ours/Our/Login.module.css';


// 간편 로그인
const Main = (props) => {
const router = useRouter();
// 카카오 로그인
const K_REST_API_KEY = "79c2c2dd8157f358220e0add127610b4";
const K_REDIRECT_URI =  "http://localhost:3000/ours/kakao/callback";
const K_CLIENT_SECRET = "mluGNf2lYiIgVZEOXdMgcbxpSMYvRldX"
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code&amp;client_secret=${K_CLIENT_SECRET}`;

// 네이버 로그인
const N_REST_API_KEY = "E0Gc9Kpwxni95bMkk0Tx";
const N_REDIRECT_URI =  "http://localhost:3000/naver/callback";
const N_CLIENT_SECRET = "8M_rdNTBnu";
const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${N_REST_API_KEY}&client_secret=${N_CLIENT_SECRET}&code=EIc5bFrl4RibFls1&state=9kgsGTfH4j7IyAkg"
return (
    <>
    <div className={styles.body}>
      <div className={styles.flexbox}>
        <div className={styles.flexboxleft}>
          <div>
            <br/>
            <img src = "/images/padlock.png" />
            <h2>간편 로그인</h2>
            <div className={styles.mapareaText1}>
            네이버 혹은 카카오톡을 통해 <br/>
            회원가입 없이 간편 로그인이 가능합니다.
            </div>
            <br/>
            <a href={NAVER_AUTH_URL}><img height="32" src="https://xe1.xpressengine.com/files/attach/images//697/974/022/830561d2c908882a1acf11869868dce6.PNG"/> </a>
            <a href={KAKAO_AUTH_URL}><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/></a>
              
          </div>
        </div>
        
        <div className={styles.flexboxright}>
          <div className={styles.mapareaTextWhole}>
            <br/>
            <div className={styles.mapareaText}>
            <h2>비회원으로 이용하기</h2>
            </div>
            <div className={styles.mapareaText2}>
              로그인 혹은 회원가입 없이도 체험예약이 가능합니다.
              <br/><br/>
              예약번호를 통한 예약정보 확인은 <br/>
              [예약 확인] 페이지를 통해 확인해주세요.<br/><br/>
              ※ 관련 문의사항은 아래로 연락 바랍니다.<br/>
               <div className={styles.text2}>
               이메일 : ours@contact.us <br/>
               전화번호 : 02-9292-1000
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main