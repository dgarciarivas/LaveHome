import React from 'react';

import qtip from '../../images/qtips_15.jpg';


const QtipPic = (props)=>{
	return(

			 <div id = 'QtipPic' > 
                         <img src={qtip} 
                                          alt= 'qtip'     
                                   />
                   </div>
	);
}

export default QtipPic