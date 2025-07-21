import GoalItem from "./GoalItem";

function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet.</p>
      ) : (
        <ul>
          {goals.map((goal) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalList;
