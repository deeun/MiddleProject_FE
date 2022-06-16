import React from 'react'
import { useRouter } from 'next/router'
import styles from '../Main/Main.module.css'
import Footer from '../Footer/Footer'

const Main = (props) => {
  const router = useRouter();

  const searchResult = () => {
    router.push('/ours/searchResult')
  }

  return (
    <>
    <div className={styles.body}>
      <div className={styles.flexbox}>
        <div className={styles.flexboxleft}>
          <div className="search" id="searchbar">
            <br/>
            <h5>체험명 검색</h5>
              <input className={styles.searchword} type="text" id="experience_search" placeholder="검색어를 입력하세요." />
              <br />
              <br/>
            <h5>체크인/체크아웃 선택</h5>
              <span className="filter-type listing-checkin">
                <input className={styles.search_checkin} type="date" id="checkin" autoComplete="off" placeholder="체크인" /> 
              </span>
              <span className="filter-type listing-checkout">
                <input className={styles.search_checkout} type="date" id="checkout" autoComplete="off" placeholder="체크아웃" /> 
              </span>
            <br/>
            <button className={styles.search_button} onClick = {searchResult}>검색</button>
          </div>
        </div>
        
        <div className={styles.flexboxright}>
          <div className={styles.mapareaTextWhole}>
            <div className={styles.mapareaText}>
            <br/>
            지역별 체험정보
            </div>

            <div className={styles.mapareaText2}>
              클릭하여 지역별 체험정보 확인하기
              <br/><br/>
              전체 체험정보 확인은
              <br/>
              [농어촌 체험하기] 탭을 눌러 주세요.
            </div>
          </div>

          <div className={styles.mapareaImg}>
            <img className={styles.map} src="/images/templemap.png" />     
            <div className={styles.number}>
              <div className={styles.number1}><a href="/ours/states/state1"><h3>2</h3>경기</a></div>
              <div className={styles.number2}><a href="/ours/states/state2"><h3>4</h3>인천</a></div>
              <div className={styles.number3}><a href="/ours/states/state3"><h3>5</h3>강원</a></div>
              <div className={styles.number4}><a href="/ours/states/state4"><h3>1</h3>충남</a></div>
              <div className={styles.number5}><a href="/ours/states/state5"><h3>4</h3>전남</a></div>
              <div className={styles.number6}><a href="/ours/states/state6"><h3>3</h3>전북</a></div>
              <div className={styles.number7}><a href="/ours/states/state7"><h3>7</h3>경남</a></div>
              <div className={styles.number8}><a href="/ours/states/state8"><h3>0</h3>경북</a></div>
              <div className={styles.number9}><a href="/ours/states/state9"><h3>4</h3>제주</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
 )}

export default Main
