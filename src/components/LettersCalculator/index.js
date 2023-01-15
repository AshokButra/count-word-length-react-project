// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterText = event => {
    const textEntered = event.target.value
    this.setState({
      count: textEntered.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="left-section">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="userInput" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="userInput"
            className="user-input"
            onChange={this.onEnterText}
            placeholder="Enter the phrase"
          />
          <div className="output-container">
            <p className="output-description">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
