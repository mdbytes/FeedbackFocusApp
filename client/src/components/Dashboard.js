import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <div className="action-btn container right">
        <Link
          to="/surveys/new"
          className="btn-floating btn-medium red lighten-2"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
      <SurveyList />
    </div>
  );
};

export default Dashboard;
