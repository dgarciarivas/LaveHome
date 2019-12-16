import React from 'react'
import Who from './Who';
import Why from './Why';
import What from './What';
import How from './How';



const AboutContent = (props) =>{
	switch(props.display){

		case 1:
		
			return(
	  				
              <Who changeAboutView = {props.changeAboutView}/>
                       
				);
		break;

		case 2:
		
			return(
	  				
      		 <What/>
                      
				);
		break;

		case 3:
		
			return(
	  			
                <Why/>
                  
				);
		break;

		case 4:
		
			return(
	  			
                <How/>
                    
				);
		break;
	}	
}


export default AboutContent;