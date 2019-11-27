import React from 'react';

const About = () =>{
	
		return(

				<div id = 'About' style={{color: '#CBDEEB', backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',



                               
                                
                                  }}>
                                    <div id = 'top' style = {{display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center',}}>
                                            <div className = "AboutTile" id = 'topLeftAbout' style = {{ backgroundColor: '#3FAAE7', color: 'white', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', }}>
                                                    <h1 style = {{fontSize: '14px'}}>Who Are We? </h1>
                                                    <p>We are a group of young glass enthusiast</p> 
                                                    <p>just like you! We savor the taste of each rip! </p>
                                            </div>
                                            <div className = "AboutTile" id = 'topRightAbout' style = {{ backgroundColor: '#3FAAE7', color: 'white', borderBottomRightRadius: '20px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', }}>
                                                <h1 style = {{fontSize: '14px'}}>Why Are We? </h1>
                                                    <p>Elevate the premium smoker's experience</p>
                                                    <p>And the only way to do this on top of smoking premium bud from premium glass is a premium cleaning system. </p>
                                            </div>
                                    </div>
                                    <div id = 'bottom' style = {{display: 'flex', flexDirection: 'row',  flexGrow: 1, alignItems: 'center', borderRadius: '10px',}}>
                                             <div className = "AboutTile" id = 'bottomLeftAbout' style = {{ backgroundColor: '#fefefe', color: 'black', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', }}>
                                                     <h1 style = {{fontSize: '14px'}}>What Are We? </h1>
                                                    <p>We're a system of cleaning your premium, exclusive glass</p>
                                                    <p>We're here to supply you with the right tools.</p>
                                             </div>
                                            <div className = "AboutTile" id = 'bottomRightAbout' style = {{ backgroundColor: 'white', color: 'black' , borderTopRightRadius: '20px', borderBottomRightRadius: '20px',  }}>
                                                     <h1 style = {{fontSize: '14px',}}>How Will We? </h1>
                                                    <p>You like getting packages?</p>
                                                    <p>Easy monthly resupply. Delivered to your door + some goodies.</p>
                                            </div>
                                    </div>
                                </div>
			)
		
}

export default About;


{/*


<div style = {{fontSize: '20px', display: 'flex', justifyContent: 'center',}}> 
                                        <span style={{color: "#f9ecf6"}}>Love </span>_for_the_<span style={{color: "white"}}> glass</span>
                                    </div>
                                    <div id = 'about-content' style = {{ paddingLeft: '15px',
                                paddingRight: '15px',}}>
                                        <p> This product began when two individuals thought there had to exist an efficient method to quickly and effectively maintian their <span style={{color: "white"}}>glass</span>.</p>
                                        <p>At <span style={{color: "#f9ecf6"}}>Lave</span>  we believe that having all the right tools can effectively reduce the lead time of a clean <span style={{color: "white"}}>glass</span> piece. </p>
                                    </div>



*/}