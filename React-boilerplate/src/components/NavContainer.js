import React from 'react';
import websitelogo from './images/ovalshadowlogo_50_1_50.png';
import Nav from './Nav';


const NavContainer = (props) => {
    
	
		return(

		      <div id = 'NavContainer'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '300px',
                    borderRadius: '10px',
                         }}>
                         <div id = 'spacer'> </div>
                                   <div id = 'logoContainer'>
                                     <img  src={websitelogo}  alt='logo' onClick = {()=>{props.changeView(0)}} />
                          
                                    </div>
                                   <Nav changeView = {props.changeView} />
                               
                                   

             </div>
			)
    
		
}

export default NavContainer;