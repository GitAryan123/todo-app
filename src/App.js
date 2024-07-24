import { useEffect, useState, React } from "react";
import CourseGoal from "./components/CourseGoal/CourseGoal";
import GoalInput from "./components/GoalInput/GoalInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/get-goals");

        const result = await res.json();

        setCourseGoals(result);
      } catch (error) {
        console.log(error, "Active The Server ");
        setCourseGoals(["Learn React", "Learn NodeJs"]);
      }
    };

    fetchData();
    setIsLoading(false);
  }, []);

  const addHandler = async (addedGoal) => {
    setCourseGoals((prev) => [addedGoal, ...prev]);
    const jsonFormattedGoal = JSON.stringify({ addedGoal });

    try {
      const res = await fetch("http://localhost:5000/add-goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonFormattedGoal,
      });

      const result = await res.json();
      console.log(result.msg);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (givenGoal) => {
    setCourseGoals((prev) => {
      const updatedGoals = prev.filter((goal) => goal !== givenGoal);
      return updatedGoals;
    });
    const jsonFormattedGoal = JSON.stringify({ givenGoal });

    try {
      const res = await fetch("http://localhost:5000/delete-goal", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: jsonFormattedGoal,
      });

      const result = await res.json();
      console.log(result.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GoalInput onAddGoal={addHandler} />
      <CourseGoal
        isLoading={isLoading}
        onDeleteItem={onDelete}
        goals={courseGoals}
      />
    </>
  );
}

export default App;
