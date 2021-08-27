import React from 'react';
import ReactDOM from 'react-dom';
import store from '../src/redux/store'
import App from './App';
import { Provider } from 'react-redux'

ReactDOM.render(
  // React-Redux的中间件 用于ui组件和container组件的交互
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


