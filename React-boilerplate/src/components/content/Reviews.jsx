import React from 'react';
import GoogleFormMaskContainer from './GoogleFormMaskContainer';

const Reviews = () =>{
	
		return(

				<div id = 'Reviews' style={{color: '#CBDEEB', backgroundColor: '#3FAAE7',
                                textAlign: 'center',
                                width: '275px',
                                height: '475px',
                                borderRadius: '10px',
                                visibility: 'visible',
                                overflowY: 'scroll-hide',
                                  }}>
                                    
                                  <GoogleFormMaskContainer />
                                 
                                  
                                  <iframe name="hidden_iframe" id="hidden_iframe" style={{visibility: 'hidden',}}  ></iframe>
                                  <div>
                                  <p> Listen to the people</p>
                                    <p> View the results of our customer survery  <a id = 'link-to-reviews' onMouseOver ={()=>{document.getElementById('link-to-reviews').style.color = 'black';}} onMouseOut ={()=>{document.getElementById('link-to-reviews').style.color = 'white';}} style = {{textDecoration: 'none', color: 'white'}} href = "https://docs.google.com/spreadsheets/d/1wkbWWSLuVpZNb-v6gFhQfaEvMckvY-4zbzMsXLc0aBQ/edit?usp=sharing"> here</a></p>
                                    </div>
              </div>
			)
		
}

export default Reviews;