import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./GoalInput.module.css";

function GoalInput(props) {
  const [goalInput, setGoalInput] = useState("");
  const [isValid, setisValid] = useState(true);

  const inputChangeHandler = (event) => {
    setisValid(true);
    setGoalInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!goalInput) {
      setisValid(false);
    } else {
      props.onAddGoal(goalInput);
      setGoalInput("");
    }
  };

  return (
    <form
      className={`${styles.form1} ${isValid ? "" : styles.invalid}`}
      onSubmit={submitHandler}
    >
      <label>Course Goal</label>
      <input
        type="text"
        onChange={inputChangeHandler}
        placeholder="Enter your goal..."
        value={goalInput}
      />
      <div className={styles["btn-container"]}>
        <Button type="submit" label={"Add Goal"} />
      </div>
    </form>
  );
}

export default GoalInput;
