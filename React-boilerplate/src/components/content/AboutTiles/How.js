import React from 'react'


const  How = ()=>{

	return(

			 <div className = "AboutTile" id = 'how' style = {{  color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style = {{fontSize: '20px', fontStyle: 'bold', color: 'black', }}>How Will We?</div>
                    <div style = {{flexGrow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'left',}}>    
                        <div>You like getting packages?</div> 
                        <div>Easy monthly resupply. Delivered to your door + some goodies. </div>
                    </div>
            </div>


		)
}

export default How

