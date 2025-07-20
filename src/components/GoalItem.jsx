function GoalItem({goal}){
    const {id, name, targetAmount, savedAmount,category,} =goal;
    const progress = (savedAmount / targetAmount) *100;
    const remaining =targetAmount-savedAmount;
    return(
        <div className="goal-item">
            <h3>{name}</h3>
            <p>category: {category}</p>
            <p>Target: ${targetAmount}</p>
            <p>saved: ${savedAmount}</p>
            <p>Remaining: ${remaining}</p>
            <p>progress : ${progress}%</p>
        </div>
    )
}