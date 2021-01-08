import React, { Component } from 'react'
import { connect } from 'react-redux'
import Payments from './Payments.js'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        )

      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='4'>
            <a href='/surveys'>Surveys</a>
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
        ]
    }
  }

  render () {
    return (
      <div className='nav-wrapper'>
        <nav role='navigation'>
          <div className='container'>
            <a id='logo-container' href='/' className='brand-logo'>
              <i className='large material-icons'>filter_center_focus</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              {this.renderContent()}
            </ul>

            <ul id='nav-mobile' class='sidenav'>
              {this.renderContent()}
            </ul>
            <a href='/#' data-target='nav-mobile' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
