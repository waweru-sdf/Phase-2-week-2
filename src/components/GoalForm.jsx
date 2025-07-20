import {useState} from "react"

function GoalForm({onAddgoal}) {
    consst [formData , setFormData] = useState({
        name:"",
        targetAmount:"",
        category:"",
        deadline:"",
        savedAmount:"0",
        createdAt: "",
    });
    function handleChange(event){
        const {name,value} =event.target;
        setFormData({...FormData,[name]:value});  
    }
    function handleSubmit(e){
        e.preventDefault();
        onAddGoal(formData)
        setFormData({
            name:"",
            targetAmount:"",
            category:"",
            deadline:"",
            savedAmount:"0",
            createdAt:"",
        });
    }
    return(
< form onSubmit={handleSubmit} >
<h2>Add New Goal</h2>
<input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
<input name="targetAmount" placeholder="TargetAmount" value={formData.targetAmount} type="number" onChange={handleChange} />
<input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
<input name="deadline" placeholder="Deadline" value={formData.deadline} onchange={handleChange} />
<input name="createdAt" placeholder="createdAt" value={formData.createdAt} onchange={handleChange} />
<button type="submit">Add Goal</button>
);
}