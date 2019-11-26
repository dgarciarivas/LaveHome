import React from 'react';

const Q1 = ()=>{
		return(
			<div id = 'Q1' style = {{display: 'flex', flexDirection: 'row',  }}>
					 <div style = {{color: 'black', width: '200px',}}>Did you have enough supplies?</div>
                      <div id = "supplyQs" style={{backgroundColor: '#CBDEEB', flexGrow: 2, borderRadius: "10px" , color: 'black'}}>
                        <input  type = 'radio' name="entry.1572140547" id ="entry.1572140547" value = "Yes"/>Yes<br/>
                        <input  type = 'radio' name="entry.1572140547" id ="entry.1572140547" value = 'No'/> No<br/>
                       </div>
                      
            </div>
		)
}

export default Q1;