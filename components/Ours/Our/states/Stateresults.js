import React, { useEffect } from 'react'
import Stateresult from './Stateresult';

const StateResults= (props) => {
    const stateresults = props.stateresults.map (stateresult => (
        <Stateresult
                programListId = {stateresult.programListId}
                villageName = {stateresult.villageName}
                stateName={stateresult.stateName} 
                cityName={stateresult.cityName}
                experience={stateresult.experience}
                experienceName={stateresult.experienceName}
                address={stateresult.address}
                manager={stateresult.manager}
                managerPhone={stateresult.managerPhone}
                latitude={stateresult.latitude}
                longitude={stateresult.longitude}
            />
        ));
        return (
            <div>
                {stateresults} 
            </div> 
        ); 
    };
export default StateResults;
