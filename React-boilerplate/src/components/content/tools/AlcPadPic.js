import React from 'react';

import alcPad from '../../images/alcPad_3_3.png';


const AlcPadPic = (props)=>{
	return(

			 <div id = 'AlcPadPic' className = "tool_pic" > 
                         <img src={alcPad} 
                                          alt= 'alcPad'     
                                   />
                   </div>
	);
}

export default AlcPadPic