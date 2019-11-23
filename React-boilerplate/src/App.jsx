import React from 'react';
import ReactDOM from 'react-dom';
import websitelogo from './components/images/websitelogo.png';

const rootEl = document.getElementById('root');


    class App extends React.Component{
            render(){
                    return(
                   
                             <div className="App"
                                    style = {{display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'space-around'}}>
                              <img src={websitelogo}  atl='logo'/>
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/oqq4w59lC9E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <button id = 'surveyButton' onClick = {()=>{ document.getElementById('survey').removeAttribute('hidden'); 
                                document.getElementById('surveyButton').setAttribute('hidden', true);}} > Love us?</button>
                                <iframe id = 'survey' hidden src="https://docs.google.com/forms/d/e/1FAIpQLScdB5NflO_JlgkqUQvch6dzbbLRHhZ9jJnLW-yieevciMoCFA/viewform?embedded=true" width="640" height="1948" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                <p> If you have any questions feel free to email lavepack@gmail.com for a prompt response.</p>
                                
                               </div>
                    );

            }
  }

    ReactDOM.render(
        <App />, rootEl
    );




// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}