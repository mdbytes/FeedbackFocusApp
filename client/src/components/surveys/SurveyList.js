import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          style={{ opacity: "95%" }}
          className="card blue-grey"
          key={survey._id}
        >
          <div className="card-content white-text">
            <h4>
              <span class="survey-title white-text">Title:</span>
              {survey.title}
            </h4>
            <h5>
              <span class="survey-subject white-text">Subject:</span>
              {survey.subject}
            </h5>
            <br />
            <p class="survey-question">Survey Question:</p>
            <br />
            <br />
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <br />
          </div>
          <div className="card-action white-text">
            <p>Answers received to date:</p>
            <table style={{ width: "150px" }} id="tallies-to-date">
              <tr>
                <td>Yes: </td>
                <td> {survey.yes.toLocaleString()} </td>
              </tr>
              <tr>
                <td>No: </td>
                <td> {survey.no.toLocaleString()} </td>
              </tr>
            </table>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div id="survey-list">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
