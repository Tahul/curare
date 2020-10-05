// Core
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Libraries
import '@heetch/flamingo-react/dist/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// HMR
if (import.meta.hot) {
  import.meta.hot.accept()
}
