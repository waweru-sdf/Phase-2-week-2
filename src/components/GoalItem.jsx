function GoalItem({ goal, onDelete }) {
  const { id, name, targetAmount, savedAmount, category } = goal;
  const progress = (savedAmount / targetAmount) * 100;
  const remaining = targetAmount - savedAmount;

  return (
    <div className="goal-item">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Remaining: ${remaining}</p>
      <p>Progress: {progress.toFixed(1)}%</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default GoalItem;
