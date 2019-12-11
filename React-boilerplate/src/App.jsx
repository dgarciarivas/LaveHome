import React from 'react';
import ReactDOM from 'react-dom';

import NavContainer from  './components/NavContainer';
import ContentContainer from './components/ContentContainer';
import SocialContainer from './components/SocialContainer.jsx';

const rootEl = document.getElementById('root');


    class App extends React.Component{
      constructor(){
        super();
        this.state = {
            disp: 0,
        }
        this.changeViews = this.changeViews.bind(this);
    }
    changeViews(num){
          this.setState({
            disp: num
          });
             
          }
            render(){
                    return(
                   
                             <div className="App"
                                    style = {{display: 'flex',
                                              height: '100%',
                                              width: '100%',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                              justifyContent: 'space-between',
                                              marginTop: '10px',


                                              }}>

                              <NavContainer changeView = {this.changeViews} display = {this.state.disp}/>

                             
                             <ContentContainer changeView = {this.changeViews} display = {this.state.disp} />
                             <SocialContainer />
                              <iframe name="hidden_iframe" id="hidden_iframe" style={{visibility: 'hidden', width: '150px', height: '1px'}}  ></iframe>
                           
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