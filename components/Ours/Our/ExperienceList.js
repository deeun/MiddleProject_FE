import React from 'react'
import { useRouter } from 'next/router'
import styles from './Experience.module.css'

// 체험 리스트

const Main = (props) => {
  const router = useRouter();
  const Details = () => {
    router.push('/ours/details')
  }
  return (
    <>
      <div className = {styles.container_clearfix}>
          <div className={styles.search_box_sub_clearfix}>        	
            <div className={styles.search_box_sub_left}>
                <div className={styles.search_content}>
                    <div className={styles.et_filter_text}>
                      <h5 className={styles.text}>검색어 입력</h5>
                      <span className={styles.listing_word}>
                        <input className={styles.serch} name="ctl00$content$searchword" type="text" id="searchword" placeholder="검색어를 입력하세요." onclientclick="return submit_check();" />
                      </span>
                    </div> 
                </div>         
              </div>
              <div className={styles.search_box_sub_right}>
                <div className={styles.search_content}>
                  <div className={styles.et_filter_date}>
                  <h5 className={styles.text}>체크인/체크아웃 선택</h5>
                    <span className={styles. listing_checkout}>
                    <input type="date" className={styles.checkin}/>
                    <input type="date" className={styles.checkout}/>
                    </span> 
                    <div className={styles.et_filte}>
                      <input type="submit" name="ctl00$content$buttonSearch" value="검색" onclick="return submit_check() ;" className={styles.content_buttonSearch} />    
                      </div>   
                  </div> 
                </div> 
              </div> 
          </div>  
    </div> 
    <div className={styles.main} >
    </div>
    </>
  )
}

export default Main