import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
  return (
    <div className='container dashboard'>
      <span id='survey-list-heading'>
        <br />
        <span id='list-heading'>Your Surveys</span>

        <div className='action-btn right'>
          <br />
          <Link
            to='/surveys/new'
            className='btn-floating btn-medium grey darken-2'
          >
            <i className='material-icons'>add</i>
          </Link>
        </div>
        <h6>And the responses we have received to date...</h6>
        <br />
      </span>
      <SurveyList />
    </div>
  )
}

export default Dashboard
