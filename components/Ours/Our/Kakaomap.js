import React, { useState, useEffect } from 'react'
import styles from '../Our/Kakaomap.module.css'


const Kakaomap = (props) => {
  console.log(props.latitude);
  console.log(props.longitude);
  const lait = props.latitude
  const long = props.longitude
 
 const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    const $script = document.createElement('script');
    console.log($script);
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3de29374766418da9fc56ce3420b7c73`
    $script.type = `text/javascript`;
    $script.addEventListener("load", () => setMapLoaded(true));
    console.log(mapLoaded);
    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!mapLoaded) {
      console.log('not loaded');
      return;
    }

  kakao.maps.load(() => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lait, long), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      }
  
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴}
      
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(lait, long); 
      
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
  
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    })
  }, [mapLoaded]);
  
  

  return (
    <div className={styles.map}>
    <div id="map" style={{width: '35rem', height: '30rem', display: 'flex'}}></div>
    </div>
  )

}

export default Kakaomap

export const getServerSideProps = async () => {
  try{
    const res = await fetch('http://localhost:8080/program_list');
    const coordinates = await res.json();
    console.log(coordinates);
    return{ //객체를 반환
      props: {coordinates} //그 객체는 props라는 이름의 프로퍼티를 가지고 있고,
      // 그 프로퍼티의 값은 객체
    }
  }catch(error){ //Exception e와 동일
    console.log(error);
    return{props : {}}
  }
}