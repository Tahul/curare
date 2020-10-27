// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App'

// Libraries
import '@heetch/flamingo-react/dist/styles.css'
import 'normalize.css'
import './index.css'
import 'toasted-notes/src/styles.css'

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
