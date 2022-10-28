import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    fErrorMessage: '',
    lErrorMessage: '',
    isSubmit: false,
  }

  onSubmitRegister = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({fErrorMessage: 'Required', lErrorMessage: 'Required'})
    } else if (firstName === '') {
      this.setState({fErrorMessage: 'Required', lErrorMessage: ''})
    } else if (lastName === '') {
      this.setState({lErrorMessage: 'Required', fErrorMessage: ''})
    } else {
      this.setState({isSubmit: true})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({fErrorMessage: 'Required'})
    } else {
      this.setState({fErrorMessage: ' ', firstName: event.target.value})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lErrorMessage: 'Required'})
    } else {
      this.setState({lErrorMessage: ' ', lastName: event.target.value})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  submitSuccessful = () => (
    <>
      <div className="submit-card">
        <img
          className="success-image"
          alt="success"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p className="submit-text">Submitted Successfully</p>
        <button
          type="submit"
          className="submit-button"
          onClick={this.onClickSubmitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </>
  )

  onClickSubmitAnotherResponse = () => {
    this.setState({isSubmit: false})
  }

  render() {
    const {
      firstName,
      lastName,
      lErrorMessage,
      fErrorMessage,
      isSubmit,
    } = this.state

    return (
      <div className="home-container">
        <div className="home-card">
          <h1 className="heading">Registration </h1>
          {isSubmit ? (
            this.submitSuccessful()
          ) : (
            <form className="form-container" onSubmit={this.onSubmitRegister}>
              <div className="input-container">
                <label htmlFor="firstName" className="input-label">
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  className="input-field"
                  placeholder="First name"
                  onBlur={this.onBlurFirstName}
                  onChange={this.onChangeFirstName}
                />
                <p className="error-message">{fErrorMessage}</p>
              </div>
              <div className="input-container">
                <label htmlFor="lastName" className="input-label">
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  className="input-field"
                  placeholder="Last name"
                  onBlur={this.onBlurLastName}
                  onChange={this.onChangeLastName}
                />
                <p className="error-message">{lErrorMessage}</p>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
