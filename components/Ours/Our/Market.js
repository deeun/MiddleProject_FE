import React from 'react'
import { useRouter } from 'next/router'
import styles from './Market.module.css'

// 농수산물 구매하기

const Main = (props) => {
  const router = useRouter();
  
  return (
    <>
      <div className={styles.market_body}>
        <div className={styles.market}>          
          <div className={styles.market_main}>
            <h3 className={styles.market_name}>푸른바다</h3>
            <div className={styles.region}>충남 홍성 ㆍ 5분전 </div>
            <div className={styles.content}>
              <span className={styles.sale_check}>
                판매
              </span>
                [오후 4시까지 주문하시면 당일 발송입니다😀]<br />
                안녕하세요~~~
            </div>
              <div className={styles.img}>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC9ZCsAjU4CTvDon_krERhNUypDVj3crqqA&usqp=CAU"></img>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AQBUgqVyAQe6XA0dCzHS4wx0Z-6eiFkAYQ&usqp=CAU"></img>
              </div>
            </div>  
            <div className={styles.menu}>
              <div className={styles.menu_main}>
                <div className={styles.menu_name}>
                  천수만생물꽃게
                </div>
                <div className={styles.menu_cost}>
                  16,000~
                </div>
              </div>  
              <div className={styles.menu_main}>
                <div className={styles.menu_name}>
                  천수만생물꽃게
                </div>
                <div className={styles.menu_cost}>
                  16,000~
                </div>
              </div>  
            </div>  
           </div>
          <div className={styles.market}>
          <div className={styles.market_main}>
          <h3 className={styles.market_name}>푸른바다</h3>
          <div className={styles.region}>충남 홍성 ㆍ 5분전 </div>
          <div className={styles.content}>
            <span className={styles.sale_check}>
              판매
            </span>
              [오후 4시까지 주문하시면 당일 발송입니다😀]<br />
              안녕하세요~~~
          </div>
            <div className={styles.img}>
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC9ZCsAjU4CTvDon_krERhNUypDVj3crqqA&usqp=CAU"></img>
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AQBUgqVyAQe6XA0dCzHS4wx0Z-6eiFkAYQ&usqp=CAU"></img>
            </div>
          </div>  
          <div className={styles.menu}>
            <div className={styles.menu_main}>
              <div className={styles.menu_name}>
                천수만생물꽃게
              </div>
              <div className={styles.menu_cost}>
                16,000~
              </div>
            </div>  
            <div className={styles.menu_main}>
              <div className={styles.menu_name}>
                천수만생물꽃게
              </div>
              <div className={styles.menu_cost}>
                16,000~
              </div>
            </div>  
          </div>  
          </div>    
      </div>
    </>
  )
}

export default Main