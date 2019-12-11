import React from 'react'


const Who = ()=>{

	return(

			 <div className = "AboutTile" id = 'who' style = {{color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <div style = {{fontSize: '20px', fontStyle: 'bold', color: 'black', }}>Who Are We? </div>
                    <div style = {{flexGrow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'left',}}>    
                        <div>We are a group of young glass enthusiast</div> 
                        <div>Just like you! We savor the taste of each rip! </div>
                    </div>
            </div>


		)
}

export default Who