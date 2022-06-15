import React, { useEffect } from 'react'
import { getOurAPI } from '../../lib/api/ours';
import Oursmarket from '../../components/Ours/Our/Oursmarket'

const Oursmarkets = (props) => {
    const oursmarkets = props.oursmarkets.map (oursmarket => (
        <Oursmarket 
                marketId = {oursmarket.marketId}
                marketName = {oursmarket.marketName}
                type = {oursmarket.type}
                productName = {oursmarket.productName}
                productPrice = {oursmarket.productPrice}
            />
        ));
        return (
            <div>
            <ul>
                {oursmarkets} 
            </ul>
            </div> 
        );
    
    };
// };
export default Oursmarkets;
