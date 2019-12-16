import React from 'react';

const TipsAndTricks = (props)=>{
	return(
			<div>
					<div id = 'tipsBackButton' style = {{textAlign: 'center', cursor: 'pointer', color: 'black', backgroundColor: '#8B8B8B', borderRadius: '25px', }} 
						onMouseOver = {() => {document.getElementById('tipsBackButton').style.color = 'white'}} 
					onMouseOut = {() => {document.getElementById('tipsBackButton').style.color = 'black'}} 
					onClick = {()=>{props.changeView(2)}}>Back to How-To</div>
					some things to keep in mind..
			</div>
	)
}

export default TipsAndTricks;