import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');


    class App extends React.Component{
            render(){
                    return(
                   
                             <div className="App">
                                
                                <p> Hello welcome to Lave</p>
                                <p> We appreciate the support</p> 
                                <p> If you have any questions feel free to email lavepack@gmail.com for any inqueries</p>
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