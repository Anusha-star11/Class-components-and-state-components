import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}S</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increase
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
