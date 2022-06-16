import React, { useEffect } from 'react'
import Detailslist from './Detailslist'

const Detailslists = (props) => {
        console.log("진짜 ",props.realName);
        const detailslists = props.detailslists.forEach(detailslist => {
            console.log("후보 ",detailslist.villageName);
            let place;
            // if (props.realName === detailslist.villageName){
            //     place = detailslist;}
            console.log(place);
            return (<Detailslist detail={props}
            programListId = {detailslist.programListId}
            villageName = {detailslist.villageName}
            stateName={detailslist.stateName} 
            cityName={detailslist.cityName}
            experience={detailslist.experience}
            experienceName={detailslist.experienceName}
            address={detailslist.address}
            manager={detailslist.manager}
            managerPhone={detailslist.managerPhone}
            latitude={detailslist.latitude}
            longitude={detailslist.longitude}
            />)
                
            
        });
        // const detailslists2 = props.detailslists.map (detailslist => (
        //     <Detailslist detail={props}
        //         programListId = {detailslist.programListId}
        //         villageName = {detailslist.villageName}
        //         stateName={detailslist.stateName} 
        //         cityName={detailslist.cityName}
        //         experience={detailslist.experience}
        //         experienceName={detailslist.experienceName}
        //         address={detailslist.address}
        //         manager={detailslist.manager}
        //         managerPhone={detailslist.managerPhone}
        //         latitude={detailslist.latitude}
        //         longitude={detailslist.longitude}
        //     />
        // ));
        return (
            <div>
                {detailslists} 
            </div> 
        );
    };
export default Detailslists;
