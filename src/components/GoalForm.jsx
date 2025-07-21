import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    savedAmount: 0,
    createdAt: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Ensure numeric fields are numbers
    const newGoal = {
      ...formData,
      targetAmount: Number(formData.targetAmount),
      savedAmount: Number(formData.savedAmount),
    };

    onAddGoal(newGoal);

    // Reset form
    setFormData({
      name: "",
      category: "",
      targetAmount: "",
      savedAmount: 0,
      createdAt: "",
      deadline: "",
    });
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

      <input
        name="createdAt"
        type="date"
        value={formData.createdAt}
        onChange={handleChange}
      />

      <input
        name="deadline"
        type="date"
        value={formData.deadline}
        onChange={handleChange}
      />

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
