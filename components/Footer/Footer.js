import React from 'react'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerleft}>
        우리 것 대한민국 농어촌 체험 사업단 <br/>
          <div className={styles.footerleft2}>
          사업자 번호: 101-5124-3327
          </div>
      </div>
      <div className = {styles.footerright}> 
        우리 것 농어촌 체험 통합정보센터 : 02-9292-1000 <br/>
        이메일 : ours@contact.us

      </div>

    <div className={styles.footerlogos}>
      <img className={styles.flogo1} src = "/images/insta.png" />
      <img className={styles.flogo2} src = "/images/youtube.png" />
      <img className={styles.flogo3} src = "/images/twitter.png" />
    </div>
  </div>
  )
}

export default Footer