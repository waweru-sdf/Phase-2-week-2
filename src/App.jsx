import { useState, useEffect } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);
  }, []);

  function addGoal(newGoal) {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((goal) => setGoals([...goals, goal]));
  }

  function updateGoal(id, updatedFields) {
    fetch(`http://localhost:3000/goals/${id}`, {
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

  function deleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" }).then(() =>
      setGoals(goals.filter((g) => g.id !== id))
    );
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <Overview goals={goals} />
      <GoalList
        goals={goals}
        onUpdate={updateGoal}
        onDelete={deleteGoal}
      />
    </div>
  );
}

export default App;
