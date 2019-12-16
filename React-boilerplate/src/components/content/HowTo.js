import React from 'react';

const HowTo = (props) =>{
	
		return(

				<div id = 'HowTo' className = "content">
                                    <h1 style={{fontSize: '20px', color: 'black', fontStyle: "bold"}}>📋 How to <span style = {{color: '#F9ECF6',}} > lave</span>  <span style = {{color: '#f9f9f9', fontStyle: 'oblique'}}>glass</span></h1>
                                    <div id = 'howto-list-container' 
                                    style = {{paddingRight: '20px',}} >
                                    <ol style={{fontSize: '15px', color: 'black', textAlign: 'left', marginLeft: '1.2em'}}>
                                         {/*<li>Read <span style = {{color: '#f9f9f9', cursor: 'pointer'}} onClick = {() => {props.changeView(5)}}>Tips 4 MAX clean</span></li>*/}
                                         <li>Empty the dirty water, then rinse inside of all glass with warm water.</li>
                                         <li>Ensure minimal water inside the glass when pouring in the contents of the black bottle into the glass piece.This bottle contains  <span style = {{color: '#f9f9f9'}}>99% isopropyl</span>, and sea salt for convenience.</li>
                                         <li>Cover the openings of the piece, then shake til desired.</li>
                                         <li>Transfer the liquid from the piece to the supplied bag, which conveniently has salt. (See the trend here?)</li>
                                         <li>Insert the smaller glass in the supplied bag, then shake until desired.</li>
                                        
                                         <li>Use the 
                                                    <span
                                                            style = {{color: 'white', cursor: 'pointer',}} onClick = {()=>{ props.changeView(4); console.log('display page of tools')}}> tools </span> 
                                        included for a final polish. </li>
                                         <li>Post your shiny glass for appreciation with <a href = 'https://www.instagram.com/explore/tags/lavepack/' style = {{textDecoration: 'none', color: '#F9ECF6',}}>#lavepack</a></li>
                                    </ol>  
                                    </div>
                                </div>
			)
		
}

export default HowTo;