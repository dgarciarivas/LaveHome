import React from 'react';

const ViewReviews = () =>{
	return(
<div>
  <p> Listen to the people</p>
                                    <p> View the results of our customer survery  <a id = 'link-to-reviews' onMouseOver ={()=>{document.getElementById('link-to-reviews').style.color = 'black';}} onMouseOut ={()=>{document.getElementById('link-to-reviews').style.color = 'blue';}} style = {{textDecoration: 'none', color: 'blue'}} href = "https://docs.google.com/spreadsheets/d/1wkbWWSLuVpZNb-v6gFhQfaEvMckvY-4zbzMsXLc0aBQ/edit?usp=sharing"> here</a></p>
                                    </div>);
}

export default ViewReviews;