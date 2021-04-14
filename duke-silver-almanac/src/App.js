import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import Header from './components/Header';
import AboutRon from './components/AboutRon';


function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/about'>
            <AboutRon/>
          </Route>
          <Route path='/' component = { Home }/>
        </Switch>
      </div>
    </CssBaseline>
    
  );
}

export default App;
