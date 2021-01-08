import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import _ from 'lodash'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div class='review-fields' key={field.name}>
        <label class='review-fields-labels'>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    )
  })

  return (
    <div id='new-survey-display' class='container'>
      <h2>Confirm and Submit</h2>
      <div class='new-survey-fields'>
        {reviewFields}
        <div id='review-buttons'>
          <button
            className='yellow darken-3 white-text btn-flat'
            onClick={onCancel}
          >
            Back
          </button>
          <button
            className='green btn-flat right white-text'
            onClick={() => submitSurvey(formValues, history)}
          >
            Send Survey
            <i className='material-icons right'>email</i>
          </button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return { formValues: state.form.surveyForm.values }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
