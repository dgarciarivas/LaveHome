import React from 'react'
import FloridaOutline from './imgComponents/FloridaOutline';
import ArtBong from './imgComponents/ArtBong';


const Who = (props)=>{

	return(

			 <div className = "AboutTile" id = 'who' >
                    <div ><h1 className = "aboutTitle">Who Are We?</h1> </div>
                    <div id = "AboutTileTextContainer">   
                    	<div style = {{display: 'flex',}}> 
                    	    <div>We are a group of young glass enthusiast located in Gainesville, FL.</div> 
                    	    <FloridaOutline /> 
                       	</div>
                       	<div style = {{display: 'flex'}}>
                        	<div>Just like you! We savor the taste of each rip! To us glass pieces are more than just smoking devices, they're <span style = {{fontStyle: 'oblique'}}> art</span>.</div>
                        	<ArtBong />
                        </div>
                        <div> These art pieces deserve to be preserved so that they can be enjoyed to their full potential. </div>
                        <div style = {{textAlign: 'center', color: '#f9f9f9'}} /*onClick = {()=>{props.changeAboutView(3)}}*/> This is our mission. 📈</div>
                    </div>
            </div>


		)
}

export default Who