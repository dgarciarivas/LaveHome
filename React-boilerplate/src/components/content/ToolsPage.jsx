import React from 'react';
import LongSwabPic from './tools/longSwab';
import QtipPic from './tools/QtipPic';
import AlcPadPic from './tools/AlcPadPic';


const ToolsPage = () =>{

	return(

			<div className = 'content' id = "ToolsPage" style = {{display: 'flex', flexDirection: 'column', width: '90%', height: '90%', borderRadius: '15px', backgroundColor: '#f9f9f9', color: 'black', border: 'none'}}>
						<div className = 'qtipContainer' id = 'toolContextContainer'
								style = {{ flexGrow: '1', display: 'flex', justifyContent: 'space-around'}}> 
								<div><span>Q-tips®</span></div>
								<QtipPic/>
								<div id = 'toolDescription'> You can never go wrong with the classics.</div>
						</div>
						<div className = 'lswabContainer'  id ='toolContextContainer'
								style = {{flexGrow: '2', }}>
								<div><span>6" Swab</span></div>
								<LongSwabPic />
								<div id = 'toolDescription'> These medical grade swabs are perfect for finishing off your downstem cleaning. </div>
						</div>
						<div className = 'wireContainer' id = 'toolContextContainer'
								style = {{flexGrow: '3',  }}> 
								<div><span>HCS wire</span></div>
								<div>pic</div>
								<div id = 'toolDescription'> Our High Carbon Steel wire is perfect for those hard to reach places inside your slide. </div>
						 </div>
						<div className = 'wipeContainer' id = 'toolContextContainer'
								style = {{flexGrow: '2', border: 'none' }}>
								<div><span>Alc wipe</span></div>
								<AlcPadPic/>
								<div id = 'toolDescription'> Perfect for wiping down your mouthpiece or hands. </div>
						</div>

			</div>

		)

}

export default ToolsPage