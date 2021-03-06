import React from 'react';
import routes from './routes'
import Landing from './Components/Landing/Landing'
import Nav from './Components/Nav/Nav'
import { withRouter } from 'react-router-dom'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="App">
        <Nav/>
      <div>
        {routes}
      </div>
      </div>
    </div>
  );
}

export default withRouter(App);
