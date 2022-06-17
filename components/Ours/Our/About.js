import React from 'react'
import styles from './About.module.css'

const About = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.about}>
      <h1>🌱농어촌 살리기 프로젝트란🌱</h1>
      </div>

      <div className={styles.info}>
      <h3>
      지역별로 특색을 살려 만든 농어촌 체험을 전국 농어촌체험표준 데이터를 이용해 소개하는 프로젝트입니다.<br/>
      <br/>
      최근 개별여행을 선호하면서 짧은 시간 머무르다 가는 여행보다 현지인처럼 생활해보며 여행하는 것이 트렌드입니다.<br/>
      또한 현지인처럼 생활을 하다가 귀농을 생각 하고 있는 젊은 세대들도 늘어나고 있는 추세입니다.<br/>
      <br/>
      하지만 농어촌 지역에서는 코로나19로 지역관광경기가 움츠러들었고,  외국인 노동자와 인구 감소로 아직까지 일손이 많이 부족한 상태입니다.<br/>
      이러한 니즈(Needs)들을 농어촌 체험프로그램을 소개해 주며 서로 충족시키고, 지역에 활력을 불어넣는 것을 목표로 하고 있습니다.<br/>
      <br/>
      젊은 세대에게 인기 있는 '한 달살이'는 확실히 지역 관광홍보 효과를 넘어 이주 정착으로 연결되는 효과도 나타나고 있습니다.<br/>
      이 사업을 통해서 (청년)마을이 만들어지면 공간이 만들어지고, 사람들이 모이고, 이야기가 생기고, 가능성이 생기다 보면, 청년들이 그 지역에 많이 머물게 되며<br/>
      청년들에게 귀농에 대한 정보 또한 알려주며 귀농·귀촌에 대한 문제점들을 함께 해결할 수 있기를 기대해봅니다.
     
      </h3>    
      </div> 

      <div className={styles.Image}>
        <img className={styles.img1} src="https://m.nongmin.com/upload/bbs/201904/20190423133736328/20190423133736328.jpg" />
        <img className={styles.img2} src="https://vrthumb.imagetoday.co.kr/2020/03/06/tid283t001248.jpg" />     
      </div>
      <br/>

    <div/>
    </>
  )
}

export default About;

