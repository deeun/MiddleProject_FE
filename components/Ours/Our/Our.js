import React, { useState } from 'react'
import { getOurAPI, postOurAPI } from '../../../lib/api/ours'
import { useRouter } from 'next/router'

const Our = (props) => {

 // useRouter
 const router = useRouter();

 
  return (
    <li>
        {props.id} - {props.title}
    </li>
  )
}

export default Our