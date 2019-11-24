import React, {Component} from 'react';
import sandwich from './images/navigation-icon_1_10_1_50.png';


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

           <div id = 'Nav' style = {{
                                   	}}
                                   >
                   <div id = 'sandwichContainer'>
                         <img style = {{borderRadius: '5px', border: '1px solid black', }}
                         onClick = {
                                            ()=>{
                                            //display the options for the views of the static site
                                            this.ShowMenu();                                     
                                        }}src={sandwich} 
                                          alt= 'nav-icon'     
                                   />
                   </div>
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
                                   }} >
                         <span style = {{color: '#f9ecf6', fontSize: '10px',}} onClick = {() =>{ 
                                                            this.props.changeView(1);
                                                            }}
                                        >About</span>
                          <span style = {{color: '#f9ecf6', fontSize: '10px',}} onClick = {() =>{this.props.changeView(2);}}>HowTo</span>
                          <span style = {{color: '#f9ecf6', fontSize: '10px',}} onClick = {() =>{ this.props.changeView(3);}}>Reviews</span>
                                       
                 </div>
                 
                                 
            </div>
			)
    }
		
}

export default Nav;