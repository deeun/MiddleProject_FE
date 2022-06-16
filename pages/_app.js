import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/globals.css'
import React, { useState } from 'react'

//모든 페이지에 공통으로 적용되는 레이아웃
function MyApp({ Component, pageProps}) {
  return (
    <div className='oursApp'>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.contentwrap}>
      <Component {...pageProps} />
      <Footer />
      </div>
    </div>
    </div>
  )
}

export default MyApp