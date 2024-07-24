import React from "react";
import GoalsList from "./GoalsList";
import "./CourseGoal.css";

function CourseGoal(props) {
  return (
    <div className="list-container">
      {props.isLoading && <p>Loading...</p>}
      {!props.isLoading && (
        <GoalsList onDelete={props.onDeleteItem} goals={props.goals} />
      )}
    </div>
  );
}

export default CourseGoal;
