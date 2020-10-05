// Core
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Libraries
import '@heetch/flamingo-react/dist/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}
