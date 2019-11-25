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
    }else{
        this.setState({visible: false});
        document.getElementById('nav-option-container').style.setProperty('visibility', 'hidden');
    }
        

    }
	render(){
		return(

           <div id = 'Nav' >
                <Sandwich  ShowMenu = {this.ShowMenu}/>
                 <div id = 'nav-option-container' 
                 					style = {{
                 					display: 'flex',
                                   	flexDirection: 'column',
                                    textAlign: 'center', 
                                    backgroundColor: '#3FAAE7',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    visibility: 'hidden',
                                    
                                    paddingLeft: '2px',
                                    paddingRight: '2px',
                                    boxShadow: ' 0px 3px 3px 0px #DCCBF0',
                                   }} >
                         <span className = 'selector' id = 'aboutSelector'  
                                                    onClick = {() =>{
                                                            document.getElementById('aboutSelector').style.color = '#CBDEEB';
                                                            this.props.changeView(1);
                                                            }}
                                       onMouseOver= {()=>{document.getElementById('aboutSelector').style.color = 'white';
                                                          document.getElementById('aboutSelector').style.cursor = 'pointer'}}
                                       onMouseOut= {()=>{document.getElementById('aboutSelector').style.color = '#f9ecf6'}} >About Us</span>
                          <span id = 'howtoSelector' className = 'selector'
                                            onClick = {() =>{document.getElementById('howtoSelector').style.color = '#CBDEEB';
                                                          this.props.changeView(2);}}
                          onMouseOver= {()=>{document.getElementById('howtoSelector').style.color = 'white';
                                              document.getElementById('howtoSelector').style.cursor = 'pointer';}}
                                       onMouseOut= {()=>{document.getElementById('howtoSelector').style.color = '#f9ecf6'}}
                            >How-To</span>
                          <span id = 'reviewSelector' className = 'selector'
                            onClick = {() =>{ 
                                  document.getElementById('reviewSelector').style.color = '#CBDEEB';
                                  this.props.changeView(3);}}
                            onMouseOver= {()=>{document.getElementById('reviewSelector').style.color = 'white';
                                                document.getElementById('reviewSelector').style.cursor = 'pointer'}}
                          onMouseOut= {()=>{document.getElementById('reviewSelector').style.color = '#f9ecf6'}}
                          >Reviews</span>
                                       
                 </div>
                 
                                 
            </div>
			)
    }
		
}

export default Nav;