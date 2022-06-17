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
            <h2>간편 로그인</h2>
            <div className={styles.mapareaText1}>
            네이버 로그인 및
            <br />
            카카오톡 로그인이 가능합니다.
            </div>
            <br/>
            <a href={NAVER_AUTH_URL}><img height="32" src="https://xe1.xpressengine.com/files/attach/images//697/974/022/830561d2c908882a1acf11869868dce6.PNG"/> </a>
            <a href={KAKAO_AUTH_URL}><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/></a>
              
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

export default Main