import React from 'react';
import AboutContent from './AboutTiles/AboutContent';



class About extends React.Component{
	constructor(){
        super();
        this.state = {
            disp: 1,
        }
        this.changeAboutView = this.changeAboutView.bind(this);
    }
    changeAboutView(num){
          this.setState({
            disp: num,
          });
        }
    render(){
		return(

				<div id = 'About' className = 'content' style={{ backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                
                                  }}>
                                    <div id = "about_nav" style = {{fontSize: '18px', display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-evenly', width: '90%', paddingTop: '5px', paddingBottom: '5px', borderBottom: 'solid navy 1px'}}>
                                        <div id = 'who_selector'    onClick = {() =>{
                                                                            document.getElementById('who_selector').style.color = 'navy'; //change to black when only mobile
                                                                            this.changeAboutView(1);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('who_selector').style.color = 'black';
                                                                          document.getElementById('who_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('who_selector').style.color = 'white'}}>Who</div>
                                        <div id = 'what_selector'       onClick = {() =>{
                                                                            document.getElementById('what_selector').style.color = 'navy'; //change to black when only mobile
                                                                            this.changeAboutView(2);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('what_selector').style.color = 'black';
                                                                          document.getElementById('what_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('what_selector').style.color = 'white'}}>What</div>
                                        <div id = 'why_selector'     onClick = {() =>{
                                                                            document.getElementById('why_selector').style.color = 'navy'; //change to black when only mobile
                                                                            this.changeAboutView(3);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('why_selector').style.color = 'black';
                                                                          document.getElementById('why_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('why_selector').style.color = 'white'}}>Why</div>
                                        <div id = 'how_selector'     onClick = {() =>{
                                                                            document.getElementById('how_selector').style.color = 'navy'; //change to black when only mobile
                                                                            this.changeAboutView(4);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('how_selector').style.color = 'black';
                                                                          document.getElementById('how_selector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('how_selector').style.color = 'white'}}>How</div>
                                    </div>
                                    <AboutContent display = {this.state.disp}/>
                                </div>
			)
    }
    }
		

export default About;





                  





{/*


<div style = {{fontSize: '20px', display: 'flex', justifyContent: 'center',}}> 
                                        <span style={{color: "#f9ecf6"}}>Love </span>_for_the_<span style={{color: "#f9f9f9"}}> glass</span>
                                    </div>
                                    <div id = 'about-content' style = {{ paddingLeft: '15px',
                                paddingRight: '15px',}}>
                                        <p> This product began when two individuals thought there had to exist an efficient method to quickly and effectively maintian their <span style={{color: "#f9f9f9"}}>glass</span>.</p>
                                        <p>At <span style={{color: "#f9ecf6"}}>Lave</span>  we believe that having all the right tools can effectively reduce the lead time of a clean <span style={{color: "#f9f9f9"}}>glass</span> piece. </p>
                                    </div>



*/}