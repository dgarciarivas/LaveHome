import React from 'react';

const Landing = () =>{
	
		return(

				<div id = 'Landing' style={{color: '#CBDEEB', backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                                border: '2px 0.5px 0.5px 0.5px black',
                                justifyContent: 'center',
                                  }}>
                                
                                    <div id = 'wordDescrip'> <p style ={{color: '#f9ecf6'}}> /lāv/ </p>
                                        <span style ={{fontStyle: 'italic', color: '#f9ecf6'}}>verb: wash</span> 
                                        
                                    </div>
                                    <div id = 'landingContent' style = {{color: '#CBDEEB'}} >
                                    <p href="https://www.merriam-webster.com/dictionary/lave"> The word <span style={{color: '#f9ecf6'}}>lave</span> is simple and monosyllabic.This word magically makes the mundane act of washing poetic.
                                    </p> 
                                    <p>DYK? \n Shakespeare used it in The Taming of the Shrew,and Charles Dickens' The Old Curiosity Shop, </p>
                                    </div>
                                    click on the logo at any point to get back to this page
                                </div>
			)
		
}

export default Landing;