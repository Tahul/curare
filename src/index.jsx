import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import './index.css'

// Routing
export const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}
