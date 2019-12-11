import React from 'react'
import Who from './Who';
import Why from './Why';
import What from './What';
import How from './How';



const AboutContent = (props) =>{
	switch(props.display){

		case 1:
		
			return(
	  				<div id = "about_content" >
                                           <Who/>
                       </div>
				);
		break;

		case 2:
		
			return(
	  				<div id = "about_content" >
                                           <What/>
                       </div>
				);
		break;

		case 3:
		
			return(
	  				<div id = "about_content" >
                                           <Why/>
                       </div>
				);
		break;

		case 4:
		
			return(
	  				<div id = "about_content" >
                                           <How/>
                       </div>
				);
		break;
	}	
}


export default AboutContent;