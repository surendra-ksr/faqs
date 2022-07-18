import {Component} from 'react'
import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isOpen: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isOpen} = this.state

    if (isOpen) {
      return (
        <div>
          <hr />
          <p className="liP">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickIcon = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
    console.log('clicked')
  }

  renderOpenImage = () => {
    const {isOpen} = this.state
    const reqImage = isOpen ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isOpen ? 'minus' : 'plus'

    return (
      <button type="button" className="plusButton" onClick={this.onClickIcon}>
        <img src={reqImage} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="liItem">
        <div className="qDiv">
          <h1 className="liH1">{questionText}</h1>
          {this.renderOpenImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
