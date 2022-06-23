import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import App from './components/App';
// createStore takes
// 1 - a list of all our reducers
// 2 - a state or predefined state
// 3 - applyMiddleware() to invoke the middlewares that we might use
const store = createStore( reducers, {}, applyMiddleware(reduxThunk))

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Provider store = {store}>
    <App/>
  </Provider>
);
