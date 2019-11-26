import React from 'react';

const About = () =>{
	
		return(

				<div id = 'About' style={{color: '#CBDEEB', backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                               
                                
                                  }}>
                                    <h1> <span style={{color: "#f9ecf6"}}>Love</span> for the <span style={{color: "white"}}>glass</span></h1>
                                    <div id = 'about-content' style = {{ paddingLeft: '15px',
                                paddingRight: '15px',}}>
                                    <p> This product began when two individuals thought there had to exist an efficient method to quickly and effectively maintian their <span style={{color: "white"}}>glass</span>.</p>
                                    <p>At <span style={{color: "#f9ecf6"}}>Lave</span>  we believe that having all the right tools can effectively reduce the lead time of a clean <span style={{color: "white"}}>glass</span> piece. </p>
                                    </div>

                                </div>
			)
		
}

export default About;