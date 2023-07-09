// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showErrorMessage: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showErrorMessage, errorMessage} = this.state

    return (
      <div className="loginform-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <label htmlFor="username" className="text">
            USERNAME
          </label>
          <input
            id="username"
            className="input"
            placeholder="Username"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password" className="text">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Password"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="login">
            Login
          </button>
          {showErrorMessage && <p className="error-message">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
