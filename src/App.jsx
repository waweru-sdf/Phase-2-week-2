import { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";
import "./App.css"

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals from deployed server
  useEffect(() => {
    fetch("https://phase-2-server.onrender.com/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  // Add a new goal
  function addGoal(newGoal) {
    fetch("https://phase-2-server.onrender.com/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((goal) => setGoals([...goals, goal]));
  }

  // Update a specific goal
  function updateGoal(id, updatedFields) {
    fetch(`https://phase-2-server.onrender.com/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        const updatedList = goals.map((g) => (g.id === id ? updatedGoal : g));
        setGoals(updatedList);
      });
  }

  // Delete a goal
  function deleteGoal(id) {
    fetch(`https://phase-2-server.onrender.com/goals/${id}`, {
      method: "DELETE",
    }).then(() => setGoals(goals.filter((g) => g.id !== id)));
  }

  // Render the UI
  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <Overview goals={goals} />
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
    </div>
  );
}

export default App;
