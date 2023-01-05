// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrementCount = () => {
    const randomValue = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="content">
            <h1 className="heading">Count {count}</h1>
            <p className="even-odd-text">Count is {displayText}</p>
            <button
              type="button"
              className="button"
              onClick={this.onClickIncrementCount}
            >
              Increment
            </button>
            <p>Increase By Random Number Between 0 and 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
