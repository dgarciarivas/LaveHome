import React, {Component} from 'react';
import sandwich from './images/navigation-icon_1_10.png';


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
        document.getElementById('nav-option-container').removeAttribute('hidden');
    }else{
        this.setState({visible: false});
        document.getElementById('nav-option-container').setAttribute('hidden', true);
    }
        

    }
	render(){
		return(

                                   <div id = 'Nav' 
                                   >
                                        <img style = {{borderRadius: '5px', border: '1px solid black', }}onClick = {
                                            ()=>{
                                            //display the options for the views of the static site
                                            this.ShowMenu();


                                            

                                        }}src={sandwich} 
                                          alt= 'nav-icon' 

                                       
                                   />
                                   <div id = 'nav-option-container' style = {{
                                    fontSize: '13px', textAlign: 'center', backgroundColor: '#3FAAE7',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                   }} hidden>
                                        <p style = {{color: '#f9ecf6'}} onClick = {() =>{ 
                                                            this.props.changeView(1);
                                                            }}
                                        >About</p>
                                         <p style = {{color: '#f9ecf6'}} onClick = {() =>{this.props.changeView(2);}}>HowTo</p>
                                        <p style = {{color: '#f9ecf6'}} onClick = {() =>{ this.props.changeView(3);}}>Reviews</p>
                                       
                                   </div>
                              
                                   

                </div>
			)
    }
		
}

export default Nav;