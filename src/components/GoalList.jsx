import GoalItem from "./GoalItem"

function GoalList({goals}){
    return(
        <div className="goal-list">
           { goals.map((goal)) => (
                <GoalItem
                key={goal.id}
                goal={goal}
                />
            )}
        </div>
    );
}