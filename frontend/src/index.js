import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import reducer from './reducers'
import middleware from './middleware'
import 'semantic-ui-css/semantic.min.css'
import './main.scss';
import App from './components/App'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(middleware))
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>  
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
