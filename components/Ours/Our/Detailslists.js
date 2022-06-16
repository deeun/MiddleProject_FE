import React, { useEffect } from 'react'
import Detailslist from './Detailslist'

let place = {};
const Detailslists = (props) => {
    console.log(place.address);   
    // console.log("진짜 ",props.realName);
        const detailslists = props.detailslists.map(detailslist => {
            // console.log("후보 ",detailslist.villageName);
            if (props.realName === detailslist.villageName){
                place = detailslist;
            }
        });
        
        return (
            <div>
                {place.villageName} <br/>
                {place.experienceName}
            </div> 
        );
    };
export default Detailslists;
