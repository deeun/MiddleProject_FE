import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Payment = (props) => {

 // useRouter
 const router = useRouter();

  return (
    <>
    <title>결제하기</title>
    <script src="https://js.tosspayments.com/v1"></script>
    </>
  )
}

export default Payment