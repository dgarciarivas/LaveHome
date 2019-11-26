import React from 'react';
import fbFavicon from './images/fbfavicon32.png';
import instafavicon from './images/instafavicon.png';
import twitterfavicon from './images/twitterfavicon32.png';
import bbfavicon from './images/bbfavicon32.png';

const SocialContainer = () =>{
return(
	  <div className = 'socialmediaContainer' >
                                 <a style = {{textDecoration: 'none',}} href="https://www.facebook.com/lavepack" > <img src = {fbFavicon}  /> </a>
                                  <a href="https://www.instagram.com/lavepack"><img src={instafavicon} /></a>
                                  <a href=" https://twitter.com/lavepack"><img src = {twitterfavicon}/></a>
                                  <a href ="https://social.breaking-buds.com/lavepack"><img src = {bbfavicon}/></a>
       </div>
	)
}

export default SocialContainer