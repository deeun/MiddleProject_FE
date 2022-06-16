import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Market.module.css'
import Comment from '../../../public/static/svg/comment.svg';
import Modal from '../../Modal';

// 농수산물 구매하기





const Market = (props) => {
  
  
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
 

  if (typeof window !== 'undefined') {
    const inputBar = document.querySelector("#comment-input");
    const rootDiv = document.querySelector("#comments");
    const btnn = document.querySelector("#submit");
    const mainCommentCount = document.querySelector('#count');
    
      //맨위 댓글 숫자 세는거.
    
    //타임스템프 만들기
    function generateTime(){
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const wDate = date.getDate();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();
    
      const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
      return time;
    
    }
    
    //유저이름 발생기
    //유저이름은 8글자로 제한.
    function generateUserName(){
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      var makeUsername = '';
      for(let i=0; i<4;i++){
          let index = Math.floor(Math.random(10) * alphabet.length);
          makeUsername += alphabet[index];        
      }
      for(let j=0;j<4;j++){
          makeUsername += "*";
      }
      return makeUsername;    
    }
    
    function numberCount(event){
      console.log(event.target);
      if(event.target === voteUp){
          console.log("2");
        return voteUp.innerHTML++; 
        
      }else if(event.target === voteDown){
        return voteDown.innerHTML++; 
      }   
      
    }
    
    function deleteComments(event){    
      const btn = event.target;    
      const list = btn.parentNode.parentNode;//commentList
      rootDiv.removeChild(list);
      //메인댓글 카운트 줄이기.
      if(mainCommentCount.innerHTML <='0'){
          mainCommentCount.innerHTML = 0;
      }else{
          mainCommentCount.innerHTML--;
      }
    }
    
    
    //댓글보여주기
    function showComment(comment){
      const userName = document.createElement('div');
      const inputValue = document.createElement('span');
      const showTime = document.createElement('div');
      const voteDiv = document.createElement('div');
      const countSpan = document.createElement('span')
      const voteUp = document.createElement('button');
      const voteDown = document.createElement('button');  
      const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
      //삭제버튼 만들기
      const delBtn = document.createElement('button');
      delBtn.className ="deleteComment";
      delBtn.innerHTML="삭제";
      commentList.className = "eachComment";
      userName.className="name";
      inputValue.className="inputValue";
      showTime.className="time";
      voteDiv.className="voteDiv";
      //유저네임가져오기 
      userName.innerHTML = generateUserName();    
      userName.appendChild(delBtn);  
      //입력값 넘기기
      inputValue.innerText = comment;
      //타임스템프찍기
      showTime.innerHTML = generateTime();
      countSpan.innerHTML=0;
      //투표창 만들기, css먼저 입혀야함.  
      voteUp.id = "voteUp";
      voteUp.innerHTML = '↑';    
      voteDown.id = "voteDown";
      voteDown.innerHTML = '↓';       
      voteDiv.appendChild(voteUp);
      voteDiv.appendChild(voteDown);
    
      //댓글뿌려주기       
      commentList.appendChild(userName);
      commentList.appendChild(inputValue);
      commentList.appendChild(showTime);
      commentList.appendChild(voteDiv);
      rootDiv.prepend(commentList);
    
      voteUp.addEventListener("click",numberCount);
      voteDown.addEventListener("click",numberCount);
      delBtn.addEventListener("click",deleteComments);
     console.dir(rootDiv);
    
    }
    
    
    
    //버튼만들기+입력값 전달
    function pressBtn(){ 
     const currentVal = inputBar.value;
     
     if(!currentVal.length){
        alert("댓글을 입력해주세요!!");
     }else{
        showComment(currentVal);  
        mainCommentCount.innerHTML++;
        inputBar.value ='';
     }
    }
    
    
    btnn.onclick = pressBtn;
    }




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
                16,000~dd
                <div id="form-commentInfo">
        <div id="comment-count">댓글 <span id="count">0</span></div>
        <input id="comment-input" placeholder="댓글을 입력해 주세요."/>
        <button id="submit">등록</button>
    </div>
    <div id="comments">
              </div>
            </div>  
          </div> 
          </div> 
    

    </div>   
      </div>
      <div>
        <div onClick={() => setShowModal(true)} className="btn">
          <Comment /> 
        </div>
        <Modal show = {showModal} onClose={() => setShowModal(false)}>
          test
        </Modal>
      </div>
      
    </>
  )
}

export default Market