import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/ff_logo.png'

class Landing extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <p>
            <a className='home-button' href='/auth/google'>
              Login with Google
            </a>
          </p>
        )

      default:
        return
    }
  }

  render () {
    return (
      <div
        id='landing-page'
        class='white-text container'
        style={{ textAlign: 'center' }}
      >
        <h2>Feedback Focus</h2>
        <p>{this.renderContent()}</p>
        <div id='home-page-logo'>
          <img class='responsive-image photo' src={logo} alt='logo' />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing)
