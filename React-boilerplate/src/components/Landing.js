import React from 'react';

const Landing = () =>{
	
		return(

				<div className = "content" id = 'Landing' /*style={{color: '#CBDEEB', backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                                border: '2px 0.5px 0.5px 0.5px black',
                                justifyContent: 'center',*/
                                  >
                                
                                    <div id = 'wordDescrip'> <p style ={{color: '#f9ecf6'}}> /lāv/ </p>
                                        <span style ={{fontStyle: 'italic', color: '#f9ecf6'}}>verb: wash</span> 
                                        
                                    </div>
                                    <div id = 'landingContent' style = {{color: '#CBDEEB', paddingLeft: '15px',
                                paddingRight: '15px',}} >
                                    <p href="https://www.merriam-webster.com/dictionary/lave"> The word <span style={{color: '#f9ecf6'}}>lave</span> is simple and monosyllabic.This word magically makes the mundane act of washing poetic.
                                    </p> 
                                    <p>This is our mission at <span style = {{color: '#f9ecf6'}}>Lave</span>. We strive to bring a pleasant experience to those who admire and enjoy the process of maintaining their premium glass.</p>
                                    </div>
        
                                </div>
			)
		
}

export default Landing;