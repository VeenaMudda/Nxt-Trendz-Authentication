// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <ul className="options-container">
            <li className="option">
              <Link to="/" className="text">
                Home
              </Link>
            </li>
            <li className="option">
              <Link to="/products" className="text">
                Products
              </Link>
            </li>
            <li className="option">
              <Link to="/cart" className="text">
                Cart
              </Link>
            </li>
            <li className="option">
              <button className="button">
                <Link to="/login" className="log">
                  Logout
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="content-container">
          <div style={{width: '41%'}}>
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="content">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution.Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="button">
              <p className="log">Shop Now</p>
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default Home
