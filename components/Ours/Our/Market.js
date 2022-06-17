import styles from './Market.module.css'


const Market = () => {
  if (typeof window !== 'undefined') {
    const inputBar = document.querySelector("#comment-input");
    const rootDiv = document.querySelector("#comments");
    const btn = document.querySelector("#submit");
    btn.className=styles.btn;
    const mainCommentCount = document.querySelector('#count');
    let idOrVoteCountList=[];
    

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
      console.log(event.target.parentNode.id);
      for(let i=0; i<idOrVoteCountList.length; i++){  
        if(event.target.id === "voteUp"){                       
            if(idOrVoteCountList[i]["commentId"].toString() === event.target.parentNode.id){                
                idOrVoteCountList[i]["voteUpCount"]++;               
                event.target.innerHTML = "💗"+idOrVoteCountList[i]["voteUpCount"];
            }       
          }
      } 
    }
    
    function initIdCount(){
        for(let i=0; i<idOrVoteCountList.length; i++){
          if(idOrVoteCountList[i]["commentId"] - i > 1){    
            idOrVoteCountList[i]["commentId"] =  idOrVoteCountList[i]["commentId"] - (idOrVoteCountList.length-(i+1));        
          }
        }
    }
    
    
    function deleteComments(){ 
      const btn = event.target;
      const list = btn.parentNode.parentNode;//commentList
      for(let i=0; i<idOrVoteCountList.length; i++){
        if(idOrVoteCountList[i]["commentId"].toString() === btn.parentNode.id){
            idOrVoteCountList.splice(btn.parentNode.id-1,1);   
        }
      }
      rootDiv.removeChild(list);   

      if(mainCommentCount.innerHTML <='0'){
          mainCommentCount.innerHTML = 0;        
      }else{
          mainCommentCount.innerHTML--; 
      }
  }
    
    function modifyComments(event){ 
      const mBtn = event.target;
      const modal = document.createElement('div')
      const modalOverlay = document.createElement('div');
      const modalContent = document.createElement('div');
      const cancleBtn = document.createElement('button');
      const okBtn = document.createElement('button');
      const input = document.createElement('input');
      const span = document.createElement('span');
      modal.className = styles.modal_hidden;
      modal.id = "hidden"

      modalOverlay.className =styles.modal__overlay;
      modalContent.className =styles.modal__content;
      okBtn.id = "ok";
      okBtn.className=styles.okBtn
      okBtn.innerHTML="수정";
      cancleBtn.id = "cancle";
      cancleBtn.innerHTML = "취소";
      input.id = "modifyVal";
      input.className=styles.input;
      input.placeholder = "변경할 내용을 입력하세요";
      span.id ="inBtn";

      span.appendChild(okBtn);
      span.appendChild(cancleBtn);
      modalContent.appendChild(input);
      modalContent.appendChild(span);
      modal.appendChild(modalOverlay);
      modal.appendChild(modalContent);
      rootDiv.appendChild(modal);  

      modal.classList.remove("hidden");
      
      cancleBtn.addEventListener("click",function(){
        document.getElementById("hidden").style.display = "none";
      });
         
      okBtn.addEventListener("click",function(event){       
        console.dir(mBtn.parentNode.parentNode.children[1]);       

        for(var i=0; i<idOrVoteCountList.length; i++){                  
            if(idOrVoteCountList[i]["commentId"].toString() === mBtn.parentNode.id){                
                idOrVoteCountList[i]["commentValue"] = input.value;         
                mBtn.parentNode.parentNode.children[1].innerHTML = input.value;
                modal.classList.add("hidden");                 
            }    
        }
      });
  
    }

    function showComment(comment){
      const userName = document.createElement('span');
      const inputValue = document.createElement('div');
      const showTime = document.createElement('span');
      const voteDiv = document.createElement('div');
      const countSpan = document.createElement('span')
      const voteUp = document.createElement('div');
      const commentList = document.createElement('div');  
      const modifyBtn = document.createElement('span')
      const newId = idOrVoteCountList.length+1; 
      const delBtn = document.createElement('span');
      delBtn.className =styles.deleteComment;
      // delBtn.className=styles.deleteComment
      delBtn.innerHTML="삭제";    
      commentList.className = "eachComment";
      userName.className= styles.name;
      userName.id = newId; //삭제,수정버튼의 상위노드. 
      inputValue.className=styles.inputValue;
      showTime.className=styles.time;
      voteDiv.className=styles.voteDiv;
      voteDiv.id = newId;

      modifyBtn.className = styles.modifyBtn;
      modifyBtn.innerHTML = " |수정";

      userName.innerHTML = generateUserName(); 
      userName.appendChild(modifyBtn);
      userName.appendChild(delBtn);  
    
      inputValue.innerText = comment;

      showTime.innerHTML = generateTime();
      countSpan.innerHTML=0;

      voteUp.id ="voteUp";
      voteUp.className =styles.voteUp;
        
      voteUp.innerHTML = "💗"+0;            
      voteDiv.appendChild(voteUp);
      
      commentList.appendChild(userName);
      commentList.appendChild(inputValue);
      commentList.appendChild(showTime);
      commentList.appendChild(voteDiv);
      rootDiv.prepend(commentList);
        
      let IdAccordingToVoteCount ={
          "commentId" : newId,
          "voteUpCount" : 0,
          // "voteDownCount" : 0
      }
        
      idOrVoteCountList.push(IdAccordingToVoteCount);
      console.log(idOrVoteCountList);
      
      initIdCount();
          
          
      voteUp.addEventListener("click",numberCount);
      modifyBtn.addEventListener("click",modifyComments);
      delBtn.addEventListener("click",deleteComments);
    
    }
      
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
      
      btn.onclick = pressBtn;
    
  }




  return (
    <>
      <div className={styles.market_body}>
        <div className={styles.market_location}>

          <div className={styles.market}>          
            <div className={styles.market_main}>
              
              <h3 className={styles.market_name}>
              <span className={styles.sale_check}>
                  판매
                </span>
                푸른바다
               
              </h3>
              <div className={styles.region}>충남 홍성 ㆍ 5분전 </div>
              <div className={styles.content}>
               
                ▶초특가!! 활 숫꽃게 13,000원!◀<br />
                충남 태안 모항항에 위치하고 있는 삼복수산입니다. <br />
                이제 금어기가 얼마 안남은 이 시점에 초특가 할인 이벤트 들어갑니다!!<br/>
                오늘은 2kg부터 주문이 가능하며 주문하실때 2kg로 선택하여 주문주세요!<br />
                1kg주문시 취소될 수 있습니다!<br />
                후기가 입증하는 삼복수산 꽃게입니다 믿고 주문주세요! ^^<br />
                숫꽃게는다리떨어짐이 유독 많기에 몽당게 정도로<br />
                생각하시고 주문주셔야 되세요! 그렇지만 신경써서<br />
                아주 좋은 것들로 선별해서 보내드리도록 하겠습니다. <br />

              </div>
                <div className={styles.img}>
                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC9ZCsAjU4CTvDon_krERhNUypDVj3crqqA&usqp=CAU"></img>
                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AQBUgqVyAQe6XA0dCzHS4wx0Z-6eiFkAYQ&usqp=CAU"></img>
                </div>
              </div>  
               
            </div>
          <div className={styles.chatBody}>
            <div className={styles.chat}>
                <div id="form-commentInfo" className={styles.text}>
                  <div id="comment-count">댓글 <span id="count">0</span></div>
                </div>
                <div className={styles.chatScroll}>
                  <div id="comments" className={styles.userchat}></div>
                </div>
              </div>
              <input id="comment-input" className={styles.input} placeholder="댓글을 입력해 주세요."/>
              <button id="submit">등록</button>
          </div>

        </div>
      </div>      
    </>
  )
}

export default Market