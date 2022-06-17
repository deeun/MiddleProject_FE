import React, { useEffect } from 'react'
import Accommodation from '../../components/Ours/Our/Accommodation'

const Accommodations = (props) => {
    const accommodations = props.accommodations.map (accommodation=> (
        <Accommodation
                accommodationId = {accommodation.accommodationId}
                customerName = {accommodation.customerName}
                customerCount = {accommodation.customerCount}
                reservationNumber = {accommodation.reservationNumber}
            />
        ));
        return (
            <div>
            <ul>
                {accommodations} 
            </ul>
            </div> 
        );
    
    };
// };
export default Accommodations;