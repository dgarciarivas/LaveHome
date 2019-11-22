import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');


    class App extends React.Component{
            render(){
                    return(
                   
                             <div className="App">
                                
                                <p> Hello world (:</p>
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