import React from 'react';

const Q2 = ()=>{
	return(
			 <div id = "Q2" className = 'QuestionContainer'>
                     	<div id = 'fillInQContainer' >
                     		If you answered No above. Please breifly explain. <span style = {{color: '#CBDEEB', fontStyle: 'oblique'}}>SKIP</span> if answered Yes above.
                     	</div>
                     	<div id = 'fillInAContainer' >
                        	<input  className = 'fillInResponse'  type="text" name="entry.1738948713" id="entry.1738948713" /><br/>
                        </div>
            </div>
	)
}

export default Q2;