import React from 'react';

import longSwab from '../../images/longswabs_1_15.jpg';


const LongSwabPic = (props)=>{
	return(

			 <div id = 'longSwabPic'  className = "tool_pic" > 
                         <img src={longSwab} 
                                          alt= 'long swab'     
                                   />
                   </div>
	);
}

export default LongSwabPic