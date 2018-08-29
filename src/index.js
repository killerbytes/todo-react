import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './store'
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Roboto:Thin,Regular,Medium,Ligth,Bold,100,300,400,500,600,700,800");
  html {
    height: 100%;
  }
  body {
    font-family: 'Roboto';
    color: #666;
    margin: 0;
  }
  .container{
    padding-left: .5rem;
    padding-right: .5rem;
  }
  input, textarea, select, button {
    font-family: 'Roboto';
    outline: none;
  }

  `

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
registerServiceWorker()
