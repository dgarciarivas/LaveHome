import React from 'react';


const AboutNav = (props) =>{
	return(
			 <div id = "about_nav" style = {{fontSize: '18px', display: 'flex', flexDirection: 'row',  justifyContent: 'space-evenly', width: '90%', paddingTop: '5px', paddingBottom: '5px', borderBottom: 'solid navy 1px'}}>
                                        <div id = 'who_selector'    onClick = {() =>{
                                                                            document.getElementById('who_selector').style.color = 'navy'; //change to black when only mobile
                                                                            props.changeAboutView(1);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('who_selector').style.color = 'black';
                                                                          document.getElementById('who_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('who_selector').style.color = 'white'}}>Who</div>
                                        <div id = 'what_selector'       onClick = {() =>{
                                                                            document.getElementById('what_selector').style.color = 'navy'; //change to black when only mobile
                                                                            props.changeAboutView(2);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('what_selector').style.color = 'black';
                                                                          document.getElementById('what_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('what_selector').style.color = 'white'}}>What</div>
                                       {/* <div id = 'why_selector'     onClick = {() =>{
                                                                            document.getElementById('why_selector').style.color = 'navy'; //change to black when only mobile
                                                                            props.changeAboutView(3);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('why_selector').style.color = 'black';
                                                                          document.getElementById('why_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('why_selector').style.color = 'white'}}>Why</div>
                                   {/*<div id = 'how_selector'     onClick = {() =>{
                                                                            document.getElementById('how_selector').style.color = 'navy'; //change to black when only mobile
                                                                            props.changeAboutView(4);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('how_selector').style.color = 'black';
                                                                          document.getElementById('how_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('how_selector').style.color = 'white'}}>How</div> */}
                                    </div>
	)
}

export default AboutNav;