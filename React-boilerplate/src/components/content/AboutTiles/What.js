import React from 'react'


const  What = ()=>{

	return(

			 <div className = "AboutTile" id = 'what' style = {{  color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style = {{fontSize: '20px', fontStyle: 'bold', color: 'black', }}>What Are We? </div>
                    <div style = {{flexGrow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'left',}}>    
                        <div>We're a system of cleaning your premium, exclusive glass</div> 
                        <div>We're here to supply you with the right tools. </div>
                    </div>
            </div>


		)
}

export default What



