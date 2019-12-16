import React from 'react';
import AboutContent from './AboutTiles/AboutContent';
import AboutNav from './../navigation/AboutNav'



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
                                    <AboutNav changeAboutView = {this.changeAboutView} />
                                    <AboutContent display = {this.state.disp} changeAboutView = {this.changeAboutView}/>
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