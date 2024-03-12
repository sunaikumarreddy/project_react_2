// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchCount: 0}

  SearchInput = event => {
    this.setState({searchCount: event.target.value.length})
  }

  render() {
    const {searchCount} = this.state
    return (
      <div className="lettersCalculatorContainer">
        <div className="calculateTheLettersContainer">
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="phrase"> Enter the phrase </label>
          <input
            id="phrase"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.SearchInput}
            className="searchInputContainer"
          />
          <div className="CountIncrementCalculateLettersContainer">
            <p className="CountIncrementParagraph">
              No.of letters: {searchCount}
            </p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="imageContainer"
        />
      </div>
    )
  }
}
export default LettersCalculator
