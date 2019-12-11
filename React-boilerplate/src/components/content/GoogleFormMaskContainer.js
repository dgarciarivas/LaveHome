import React from 'react';
import Q1 from './googleformComponents/Q1';
import Q2 from './googleformComponents/Q2';
import Q3 from './googleformComponents/Q3';
import Q4 from './googleformComponents/Q4';
import Q5 from './googleformComponents/Q5';
import Q6 from './googleformComponents/Q6';
import Q7 from './googleformComponents/Q7';




class GoogleFormMaskContainer extends React.Component{

  constructor(){
    super();
    this.state = {
      submitted: false

    }

  }
  handleSubmit(){
       if(this.state.submitted = false){
          console.log("form was submitted");
          this.setState({submitted: true});
          alert('tTanks for the feedback! If you love it then Lave it!');
        }else{
          console.log("already submitted");
        }
        console.log(this.state);
  }
render(){
	return(

			<form id = 'GoogleFormMaskContainer' action = {'https://docs.google.com/forms/d/e/1FAIpQLScdB5NflO_JlgkqUQvch6dzbbLRHhZ9jJnLW-yieevciMoCFA/formResponse?'} target = 'hidden_iframe' method = "post" >
                  <Q1 />
                  <Q2 />
                  <Q3 />
                  <Q4 />
                  <Q5 />
                  <Q6 />
                  <Q7 />
                <button style = {{border: 'black', cursor: 'pointer'}} 
                          onSubmit = {this.handleSubmit()}> Submit!</button>
            </form>

	)
}
}
export default GoogleFormMaskContainer;