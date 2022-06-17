import React, { useEffect } from 'react'


let place = {};
const Detailslists = (props) => {
        console.log("진짜 ",props.realName);
        const detailslists = props.detailslists.map(detailslist => {
            // console.log("후보 ",detailslist.villageName);
            if (props.realName == detailslist.villageName){
                place = detailslist;
            }
            // console.log(place)
                 
            
        });
       
        return (
            <div>
                {place.realName} 
                {place.villageName} 
                {place.experienceName}
                {place.managerPhone}
            </div> 
        );
    };
export default Detailslists;
