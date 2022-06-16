import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Oursmarket = (props) => {

 // useRouter
 const router = useRouter();

 
  return (
    <>

        <p>
       시장 정보를 보려면 클릭
       </p>
    <li>
      {props.marketName} {props.productName}
    </li>
    </>
  )
}

export default Oursmarket