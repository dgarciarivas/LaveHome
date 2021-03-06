import React from 'react';
import websitelogo from './images/ovalshadowlogo_50_1_50.png';
import Nav from './navigation/Nav';


const NavContainer = (props) => {
    
	
		return(

		      <div id = 'NavContainer'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '302px',
                    borderRadius: '10px',
                    marginTop: '5px',
                         }}>
                       {/*  <div id = 'spacer' style ={{width: '88px'}}> </div>*/}
                                   <div id = 'logoContainer' style = {{cursor: 'pointer'}}>
                                     <img  src={websitelogo}  alt='logo' onClick = {()=>{props.changeView(0)}} />
                          
                                    </div>
                                     <div id = 'spacer' style ={{width: '88px'}}>
                                        <Nav changeView = {props.changeView} /> 
                                    </div>
                                   
                               
                                   

             </div>
			)
    
		
}

export default NavContainer;