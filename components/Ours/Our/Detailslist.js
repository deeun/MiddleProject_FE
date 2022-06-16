import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Detailslist = (props) => {
//  console.log("똑똑", props);

 // useRouter
 const router = useRouter();
 const detail = () => {
  router.push('/ours/details')
}

  return (
    <></>
  )
}

export default Detailslist