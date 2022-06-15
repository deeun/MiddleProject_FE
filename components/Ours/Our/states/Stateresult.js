import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Stateresult = (props) => {
 // useRouter
 const router = useRouter();

  return (
    <>
    {/* <li>
    {props.villageName}<br/>
    {props.cityName}
    </li> */}
        <table>
        <tr>
          <th>구분</th>
          <th>col</th>
          <th>col</th>
          <th>col</th>
        </tr>
        <tr>
          <th>체험명</th>
          <td>{props.villageName}</td>
          <td>Dolor</td>
          <td>Dolor</td>
        </tr>
        <tr>
          <th>row</th>
          <td>Dolor</td>
          <td>Dolor</td>
          <td>Dolor</td>
        </tr>
        <tr>
          <th>row</th>
          <td>Dolor</td>
          <td>Dolor</td>
          <td>Dolor</td>
        </tr>
    </table>
    </>

  )
}

export default Stateresult