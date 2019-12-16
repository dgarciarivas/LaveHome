import React from 'react';
import LongSwabPic from './tools/longSwab';
import QtipPic from './tools/QtipPic';
import AlcPadPic from './tools/AlcPadPic';
import WiresPic from './tools/WiresPic';


const ToolsPage = (props) =>{

	return(

			<div className = 'content' id = "ToolsPage" style = {{display: 'flex', flexDirection: 'column', width: '90%', height: '90%', borderRadius: '15px', backgroundColor: '#f9f9f9', color: 'black', border: 'none', textAlign: 'left',}}>
						<div id = 'toolBackButton' style = {{textAlign: 'center', cursor: 'pointer', color: 'black', backgroundColor: '#8B8B8B', borderRadius: '25px', }} onMouseOver = {() => {document.getElementById('toolBackButton').style.color = 'white'}} onMouseOut = {() => {document.getElementById('toolBackButton').style.color = 'black'}} onClick = {()=>{props.changeView(2)}}>Back to How-To</div>
						<div className = 'qtipContainer' id = 'toolContextContainer'
								style = {{ flexGrow: '1',  }}> 
								<div>Q-tips®</div>
								<QtipPic/>
								<div id = 'toolDescription'> You can never go wrong with the classics.</div>
						</div>
						<div className = 'lswabContainer'  id ='toolContextContainer'
								style = {{flexGrow: '2', }}>
								<div>6 inch swab</div>
								<LongSwabPic />
								<div id = 'toolDescription'> These medical grade swabs are perfect for finishing off your downstem cleaning. </div>
						</div>
						<div className = 'wireContainer' id = 'toolContextContainer'
								style = {{flexGrow: '3',  }}> 
								<div>HCS wire</div>
								<WiresPic />
								<div id = 'toolDescription'> Our bendable High Carbon Steel wire is great for those hard to reach places inside your slide. </div>
						 </div>
						<div className = 'wipeContainer' id = 'toolContextContainer'
								style = {{flexGrow: '2', border: 'none' }}>
								<div>Alc wipe</div>
								<AlcPadPic/>
								<div id = 'toolDescription'> Wipe down your mouthpiece or hands after cleaning. </div>
						</div>
						

			</div>

		)

}

export default ToolsPage