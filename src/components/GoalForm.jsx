import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    savedAmount: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal({ ...formData, targetAmount: Number(formData.targetAmount) });
    setFormData({ name: "", category: "", targetAmount: "", savedAmount: 0 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input
        name="name"
        placeholder="Goal name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        name="targetAmount"
        type="number"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
