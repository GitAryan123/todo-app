import React from "react";
import Button from "../UI/Button";
import "./GoalsList.css";

function GoalsList(props) {
  const ItemClickHandler = (event) => {
    props.onDelete(event.target.textContent);
  };

  return (
    <ul>
      {props.goals.map((goal) => (
        <li key={Math.random()}>
          <Button onClick={ItemClickHandler} label={goal} />
        </li>
      ))}
    </ul>
  );
}

export default GoalsList;
