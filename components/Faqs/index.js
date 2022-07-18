import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="mainDiv">
        <div className="inDiv">
          <h1>FAQs</h1>
          <ul className="ulDiv">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
