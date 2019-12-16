import React, {Component} from 'react';
import Sandwich from './Sandwich';


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
        this.ShowMenu = this.ShowMenu.bind(this);
    }
    
    ShowMenu(){
        if(!this.state.visible){
            this.setState({visible: true});
        document.getElementById('nav-option-container').style.setProperty('visibility', 'visible');
        //document.getElementById('Nav').style.setProperty('box-shadow', '2px 2px 2px 2px #DCCBF0');
    }else{
        this.setState({visible: false});
        document.getElementById('nav-option-container').style.setProperty('visibility', 'hidden');
        document.getElementById('Nav').style.setProperty('box-shadow', 'none');
    }
        

    }
	render(){
		return(

           <div id = 'Nav' style= {{boxShadow:  'none',
                                    borderRadius: '10px',
                                    }} >
                {/*<Sandwich  ShowMenu = {this.ShowMenu}/>*/}
                 <div id = 'nav-option-container' 
                 					style = {{
                 					display: 'flex',
                                   	flexDirection: 'column',
                                    textAlign: 'center', 
                                    visibility: 'visible',

                                   
                                    
                                   }} >
                                   <div>
                                         <span className = 'selector' id = 'aboutSelector'  
                                                                    onClick = {() =>{
                                                                            document.getElementById('aboutSelector').style.color = 'navy'; //change to black when only mobile
                                                                            this.props.changeView(1);
                                                                            }}
                                                       onMouseOver= {()=>{document.getElementById('aboutSelector').style.color = 'black';
                                                                          document.getElementById('aboutSelector').style.cursor = 'pointer'}}
                                                       onMouseOut= {()=>{document.getElementById('aboutSelector').style.color = '#3FAAE7'}} >
                                            About Us
                                          </span>
                                  </div>
                                  <div>
                                    <span id = 'howtoSelector' className = 'selector'
                                                      onClick = {() =>{document.getElementById('howtoSelector').style.color = 'navy';
                                                                    this.props.changeView(2);}}
                                    onMouseOver= {()=>{document.getElementById('howtoSelector').style.color = 'black';
                                                        document.getElementById('howtoSelector').style.cursor = 'pointer';}}
                                                 onMouseOut= {()=>{document.getElementById('howtoSelector').style.color = '#3FAAE7'}}
                                      >
                                      How-To
                                    </span>
                                  </div>
                                  <div>
                                        <span id = 'reviewSelector' className = 'selector'
                                          onClick = {() =>{ 
                                                document.getElementById('reviewSelector').style.color = 'navy';
                                                this.props.changeView(3);}}
                                          onMouseOver= {()=>{document.getElementById('reviewSelector').style.color = 'black';
                                                              document.getElementById('reviewSelector').style.cursor = 'pointer'}}
                                        onMouseOut= {()=>{document.getElementById('reviewSelector').style.color = '#3FAAE7'}}
                                        >
                                          Review
                                        </span>
                                    </div>
                                       
                 </div>
                 
                                 
            </div>
			)
    }
		
}

export default Nav;