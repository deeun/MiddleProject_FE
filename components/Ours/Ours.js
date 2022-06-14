import React from 'react'
import Our from '../Ours/Our/Our'

const Ours = (props) => {
    //deleteTodo
    const deleteTodo = (id) => {
        props.deleteTodo(id); //main.js에서 props로 내려받은 deleteTodo 호출
    }
    console.log(props);
    // if (props.our) {
        const ours = props.ours.map (our => (
            <Our 
                // key={our.id} 
                id={our.id} 
                title={our.title} 
                descripton={our.descripton}
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
