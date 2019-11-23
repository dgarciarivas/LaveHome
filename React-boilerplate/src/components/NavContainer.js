import React from 'react';
import websitelogo from './images/ovalshadowlogo_50.png';
import Nav from './Nav';


const NavContainer = (props) => {
    
	
		return(

				<div id = 'NavContainer'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                 
                    borderRadius: '10px',
                }}>
                                   <img  src={websitelogo}  alt='logo' onClick = {()=>{props.changeView(0)}} />
                                   <Nav changeView = {props.changeView} />
                               
                                   

                </div>
			)
    
		
}

export default NavContainer;