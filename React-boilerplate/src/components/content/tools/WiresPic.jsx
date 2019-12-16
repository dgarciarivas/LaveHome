import React from 'react';

import wires from '../../images/wires.png';


const WiresPic = (props)=>{
	return(

			 <div id = 'WiresPic' className = "tool_pic" > 
                         <img src={wires} 
                                          alt= 'HCS wires'     
                                   />
                   </div>
	);
}

export default WiresPic