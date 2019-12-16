import React from 'react';
import tools from '../../../images/Tools_Hammer_Spanner_1_40x40.png';
import arrow from '../../../images/arrow_40x20.png';
import clock from '../../../images/clock.png'

const Tools2Time = () =>{
	return(
			<div style  = {{display: 'flex', justifyContent: 'space-evenly' }}>
				<img src = {tools} alt = 'tools' />
				<img src ={arrow} alt = 'arrow' />
				<img src = {clock} alt = 'clock' />
			</div>
	)
}

export default Tools2Time;