import React from 'react';

const Landing = () =>{
	
		return(

				<div className = "content" id = 'Landing'  style = {{ backgroundColor: '#f9f9f9', }}>

                                <div id = 'top_landing'>
                                    <div id = 'landing_words_top' ><a href="https://www.merriam-webster.com/dictionary/lave" style = {{textDecoration: 'none', color: 'black',}}> The word <span style={{color: '#3FA9E7'}}>lave</span> is simple and monosyllabic.This word magically makes the mundane act of washing poetic.</a></div> 
                                    <div id = 'wordDescrip' style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',}}> 
                                        <div style ={{color: '#673097', fontSize: '18px'}}> /lāv/ </div>
                                        <div><span style ={{fontStyle: 'italic', color: '#673097', }}>verb: to wash</span> </div>
                                    </div>
                                    
                                </div>

                                <div id = 'email_list' style = {{color: '#3FA9E7', borderBottom: 'double black', borderTop: 'double black ', cursor: 'pointer'}} onClick = {()=>{console.log('this is supposed to do something')}}>Join our email list!</div>
                                
                                <div id = 'bottom_landing' >     
                                    <div id = 'landing_words_bottom' >This is our mission at <span style = {{color: '#3FA9E7'}}>Lave</span>. We strive to bring a pleasant experience to those who admire and enjoy the process of maintaining their premium glass.</div>
                                    <div id = 'landing_words_bottom' > We are excited to continue serving you effective products. If you'd like more please feel free to email <span style={{color: '#3FA9E7'}}>lavepack@gmail.com</span> with your purchase order.</div>
                                    <div id = 'landing_words_bottom' > For expedient fulfillment, you can cashApp <span style={{color: '#3FA9E7'}}>$LoveLave</span> for the supplies. $5 for one cleaning or $20 for  five.</div>
                                </div>
                                    
                                            
        
                                </div>
			)
		
}

export default Landing;