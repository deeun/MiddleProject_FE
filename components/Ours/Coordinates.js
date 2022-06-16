import React, { useEffect } from 'react'

const Coordinates = (props) => {
    const coordinates = props.coordinates.map (coordinate => (
        <Kakaomap
                latitude = {coordinate.latitude}
                longitude = {coordinate.longitude}
            />
        ));
        return (
            <div>
            <ul>
                {coordinates} 
            </ul>
            </div> 
        );
    
    };
// };
export default Coordinates;
