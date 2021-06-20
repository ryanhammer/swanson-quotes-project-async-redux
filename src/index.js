import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { ThemeProvider } from '@material-ui/core';
import theme from './styling'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);


