import React, { useEffect } from 'react'
import Kakaomap from './Our/Kakaomap';

const Kakaomaps = (props) => {
        const kakaomaps = props.kakaomaps.map (kakaomap => (
            <Kakaomap
                latitude={kakaomap.latitude}
                longitude={kakaomap.longitude}
            />
        ));


        return (
            <div>
            <ul>
                {kakaomaps} 
            </ul>
            </div> 
        );
    
    };
// };
export default Kakaomaps;
