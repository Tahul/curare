// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}
