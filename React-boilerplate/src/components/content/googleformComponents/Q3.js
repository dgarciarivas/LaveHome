import React from 'react';

const Q3 = ()=>{
		return(
			<div id = 'Q3'>
					            <span style = {{color: 'black'}}>How useful were our tools?</span><br/>
                                        <div id = "usefulQs" style = {{backgroundColor: '#CBDEEB', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: '10px',}}>

                                            <div id = 'itemTextContainer' style = {{flexGrow: 1, color: 'black'}}>
                                                    <div style = {{backgroundColor: 'black', borderRadius: '12px', color: '#CBDEEB'}}>Item</div>
                                                    <div>Wire</div>
                                                    <div>Alcohol Wipe</div>
                                                    <div>Long Swap</div>
                                            </div>
                                            <div id = 'usefulAs' style={{display: 'flex', flexDirection: 'column', flexGrow: 3, color: 'black',}}>
                                                            <div id = "usefulOptionsContainer" style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', fontSize: '12px'}}>
                                                                <div>Essential</div>
                                                                <div>Regular</div>
                                                                <div>Didn't use</div>
                                                            </div>
                                                            <div id = "radioButtonContainer" style = {{display: 'flex',
                                                                                                        flexDirection: 'column', }}>
                                                                <div id ="radioWireContainer" style = {{display: 'flex',
                                                                                                        flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                                                    <input type="radio" name ="entry.435193901" id="entry.435193901" value = "Essential"/><br/>
                                                                    <input type="radio" name ="entry.435193901" id="entry.435193901" value = "Regular"/><br/>
                                                                    <input type="radio" name ="entry.435193901" id="entry.435193901" value = "Didn't use"/><br/>
                                                                </div>
                                                                <div id ="radioWipeContainer" style = {{display: 'flex',
                                                                                                        flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                                                      <input type="radio" name ="entry.1948496293" id="entry.1948496293" value = "Essential"/><br/>
                                                                      <input type="radio" name ="entry.1948496293" id="entry.1948496293" value = "Regular"/><br/>
                                                                       <input type="radio" name ="entry.1948496293" id="entry.1948496293" value = "Didn't use"/><br/>
                                                                </div>
                                                                 <div id ="radioSwapContainer" style = {{display: 'flex',
                                                                                                        flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                                                       <input type="radio" name ="entry.623844360" id="entry.623844360" value = "Essential"/><br/>
                                                                        <input type="radio" name ="entry.623844360" id="entry.623844360" value = "Regular"/><br/>
                                                                        <input type="radio" name ="entry.623844360" id="entry.623844360" value = "Didn't use"/><br/>
                                                                </div>
                                                            </div>
                                            </div>
                                        </div>
                      
            </div>
		)
}

export default Q3;