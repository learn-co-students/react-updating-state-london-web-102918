// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.state = { hasBeenClicked: false }
  }
  handleClick = () => {
    let isClicked = this.state.hasBeenClicked
    this.setState({ hasBeenClicked: !isClicked }, () =>
      console.log(this.state.hasBeenClicked)
    )
  }
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} </p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
