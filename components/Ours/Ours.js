import React, { useEffect } from 'react'
import { getOurAPI } from '../../lib/api/ours';
import Our from '../Ours/Our/Our'

const Ours = (props) => {
    // if (props.our) {
        console.log(props);
        const ours = props.ours.map (our => (
            <Our key={our.programListId}
                programListId = {our.programListId}
                villageName = {our.villageName}
                stateName={our.stateName} 
                cityName={our.cityName}
                experience={our.experience}
                experienceName={our.experienceName}
                address={our.address}
                manager={our.manager}
                managerPhone={our.managerPhone}
                latitude={our.latitude}
                longitude={our.longitude}
            />
        ));


        return (
            <div>
            <ul>
                {ours} 
            </ul>
            </div> 
        );
    
    };
// };
export default Ours;
