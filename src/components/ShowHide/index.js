// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  getFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  getLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
        </div>
        <div className="buttonCont">
          <div>
            <button
              className="button"
              onClick={this.getFirstName}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="nameCont">
                <p className="name">Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button className="button" onClick={this.getLastName} type="button">
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="nameCont">
                <p className="name">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
