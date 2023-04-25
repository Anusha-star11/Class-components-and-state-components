import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {components} from 'react'

class Welcome extends Components {
  render() {
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
