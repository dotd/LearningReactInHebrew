import {React, useState} from 'react'; 

function ShowHover() {
    const [time, setHover] = useState(0);
    function countHover() {
        setHover(time + 1);
    }  
      return (
        <div>
    <h2 onMouseOver={countHover}>Hover above me A{time}A </h2> </div>
    ); 
}
export default ShowHover;