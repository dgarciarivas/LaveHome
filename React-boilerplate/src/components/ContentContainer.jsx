import React from 'react';
import About from './About';
import HowTo from './HowTo';
import Reviews from './Reviews';
import Landing from './Landing';

const ContentContainer = (props) =>{

	switch (props.display){
		case 0: 
			return(
				<div id = 'content-container'
                                    style = {{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                        height: '500px',
                                        width: '300px',
                                        borderRadius:'25px',
                                        backgroundColor: "white",
                                        boxShadow: ' 0px 5px 3px 5px #bfaae9',
                                        marginTop: '10px',
                                    }}>
                     <Landing />
               </div>);
			break;

		case 1: 
			return(
				<div id = 'content-container'
                                    style = {{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                        height: '500px',
                                        width: '300px',
                                        borderRadius:'25px',
                                        backgroundColor: "white",
                                        boxShadow: ' 0px 5px 3px 5px #bfaae9',
                                        marginTop: '10px',
                                    }}>
                     <About />
               </div>);
			break;

		case 2:
			return( <div id = 'content-container'
                                    style = {{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                        height: '500px',
                                        width: '300px',
                                        borderRadius:'25px',
                                        backgroundColor: "white",
                                        boxShadow: ' 0px 5px 3px 5px #bfaae9',
                                        marginTop: '10px',
                                    }}>
                     <HowTo />                                       
	       </div>);
			break;

		case 3: 
			return(
			 <div id = 'content-container'
                                    style = {{
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                        height: '500px',
                                        width: '300px',
                                        borderRadius:'25px',
                                        backgroundColor: "white",
                                       boxShadow: ' 0px 5px 3px 5px #bfaae9',
                                        marginTop: '10px',
                                    }}>
                    <Reviews />         
        	</div>);
        	break;
        

	}

	
}

export default ContentContainer;