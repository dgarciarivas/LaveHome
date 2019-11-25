import React from 'react';

import sandwich from '../images/navigation-icon_1_10_1_50.png';


const Sandwich = (props)=>{
	return(

			 <div id = 'sandwichContainer' style = {{flexStart: 'end', marginLeft: '30.5px'}}>
                         <img style = {{borderRadius: '5px', border: '1px solid black', }}
                         onClick = {
                                            ()=>{
                                            //display the options for the views of the static site
                                            props.ShowMenu();                                     
                                        }}src={sandwich} 
                                          alt= 'nav-icon'     
                                   />
                   </div>
	);
}

export default Sandwich