import React from 'react'
import ReactDOM from 'react-dom'
import {normalize} from 'styled-normalize'
import App from './App'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }

    body {
    
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
