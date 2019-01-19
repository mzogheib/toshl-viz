import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit() {
    const { onSubmit } = this.props
    const { value } = this.state
    onSubmit(value)
  }

  render() {
    const { value } = this.state
    return (
      <div className="inputForm">
        <input onChange={this.handleChange} value={value} />
        <Button label="Submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default InputForm

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
