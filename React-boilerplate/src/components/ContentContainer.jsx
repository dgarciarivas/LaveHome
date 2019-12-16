import React from 'react';
import About from './content/About';
import HowTo from './content/HowTo';
import Reviews from './content/Reviews';
import Landing from './content/Landing';
import ToolsPage from './content/ToolsPage';
import TipsAndTricks from './content/TipsAndTricks';

const ContentContainer = (props) =>{

	switch (props.display){
		case 0: 
			return(
				<div id = 'content-container'>
                     <Landing />
               </div>);
			break;

		case 1: 
    
			return(
				<div id = 'content-container'>
                     <About />
               </div>);
			break;

		
		case 2:
			return( <div id = 'content-container'>
                     <HowTo changeView = {props.changeView} />                                       
	       </div>);
			break;

		case 3: 
			return(
			 <div id = 'content-container'>
                    <Reviews  />         
        	</div>);
        	break;


  case 4: 
    return(
          <div id = 'content-container'>
                 <ToolsPage changeView = {props.changeView} />

          </div>
      )
    case 5:
    	return(
    		 <div id = 'content-container'>
                 <TipsAndTricks changeView = {props.changeView} />

          </div>
    		)

	}

	
}

export default ContentContainer;