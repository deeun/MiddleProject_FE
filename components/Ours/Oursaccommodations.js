import React, { useEffect } from 'react'
import { getOurAPI } from '../../lib/api/ours';
import CheckReservation from '../Ours/Our/CheckReservation'

const Oursaccommodations = (props) => {
    console.log(props);
    const accommodations = props.accommodation.map(oursaccommodations => (
        <CheckReservation 
            accommodationId = {oursaccommodations.accommodationId}
            customerName = {oursaccommodations.customerName}
            customerCount = {oursaccommodations.customerCount}
            customerPhone = {oursaccommodations.customerPhone}
            reservationNumber = {oursaccommodations.reservationNumber}
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
export default Oursaccommodations;
