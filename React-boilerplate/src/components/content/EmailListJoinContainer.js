import React from 'react';

const EmailListJoinContainer = (props)=>{
	switch(props.disp){

			case 0:
			return(

				<div id = 'email_list' style = {{color: '#3FA9E7', borderBottom: 'double black', borderTop: 'double black ', cursor: 'pointer'}} onClick = {()=>{props.addEmail(1)}}>Join our email list!</div>
				);
			break;

			case 1: 
			return(
					
				<form id = 'EmailFormMaskContainer' action = {'https://docs.google.com/forms/d/e/1FAIpQLSfiV8_JE4wAPRihrcm_CPDea0StBe4z6yQ3n72wpWJYQKzVwA/formResponse?'} target = 'hidden_iframe2' method = "post" /*onSubmit = {()=>{props.addEmail(2)}}*/>


	                 <div id = 'emialInputContainer' className = 'QuestionContainer' style = {{display: 'flex', flexDirection: 'column', }}>
						 <div style = {{color: '#3FA9E7',}}>Email</div>
	                     <div id = 'fillInAContainer'   style = {{ border: 'double black'}} > 
								<input  className = 'fillInResponse' style = {{backgroundColor: '#f9f9f9', color: '#3FA9E7'}} type="text" name ="entry.528514350" id="entry.528514350"/>
						</div>
					</div>
	             
	                <button style = {{color: '#3FA9E7', cursor: 'pointer', backgroundColor: 'white', border: 'double #3FA9E7'}} type = 'submit'
	                         > Join!</button>
	            </form>
					);
			break;
			case 2:
			return(
						<div id = 'email_list' style = {{color: '#3FA9E7', borderBottom: 'double black', borderTop: 'double black ', }}>Thanks for joining!</div>
				)
			}
	}
export default EmailListJoinContainer;








