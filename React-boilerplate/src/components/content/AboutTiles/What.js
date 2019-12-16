import React from 'react'
import Tools2Time from './imgComponents/Tools2Time';
import Repeat from './imgComponents/Repeat';
import SystemImage from './imgComponents/SystemImage';

const  What = ()=>{

	return(

			 <div className = "AboutTile" id = 'what'>
                    <div ><h1 className = "aboutTitle" >What Are We? </h1></div>
                    <div id = "AboutTileTextContainer"> 
                    	<div style =  {{display: 'flex', alignItems: 'center'}} >
                    		<SystemImage />
                       		<div>We're a system of cleaning your premium, exclusive glass in an efficient and time sensitive manner.</div> 
                       	</div>
                        <div>We're here to supply you with the right tools for the right job. This is how we plan to enable our users to not only effectly clean their glass pieces, but also do it in an short amount of time!</div>
                        <Tools2Time />
                        <div style = {{display: 'flex', alignItems: 'center'}}>
                        	<div> Iteration is key. A strong community educating one another on best cleaning habits is the dream we have in mind.</div>
                        	<Repeat />
                        </div>
                    </div>
            </div>


		)
}

export default What



