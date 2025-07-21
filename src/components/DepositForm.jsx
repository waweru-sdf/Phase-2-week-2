import { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const selectedGoal = goals.find((g) => g.id === Number(goalId));
    if (!selectedGoal) return;

    const newSaved = Number(selectedGoal.savedAmount) + Number(amount);
    onDeposit(Number(goalId), { savedAmount: newSaved });

    setGoalId("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
