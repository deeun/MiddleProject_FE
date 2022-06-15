import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Our = (props) => {

 // useRouter
 const router = useRouter();

 
  return (
    <li>
      {props.stateName}
    </li>
  )
}

export default Our