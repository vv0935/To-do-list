import { useState } from "react";
export default function Todolist(){
    function inputChange(e){
        setNewTask(e.target.value)
    }
    function addtask(){
        if((newTask.trim())!==""){
            setTasks(t=>([...t, newTask]))
            setNewTask("");
        }
        else{
            alert("enter a valid task")
        }
        
    }
    function delTask(index){
        setTasks(tasks.filter((t,i)=>(i!==index)))
    }
    function moveUp(index){
        if(index>0){
            let temptasks= [...tasks];
            [temptasks[index],temptasks[index-1]]=[temptasks[index-1],temptasks[index]];
            setTasks(temptasks);
        }
    }
    function moveDown(index){
        if(index<tasks.length-1){
            let temptasks=[...tasks];
            [temptasks[index],temptasks[index+1]]=[temptasks[index+1], temptasks[index]]
            setTasks(temptasks);
        }
    }
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    return(
        <div className="Todolist">
        <h2>To do List App</h2>
        <input type="text" placeholder="enter task" value={newTask} onChange={inputChange}></input>
        <button className="add-btn" onClick={addtask}>Add</button>
        <ol>
            {tasks.map((task, index)=>(<li key={index}>
                <span className="task">{task}</span>
                <button className="del-btn" onClick={()=>delTask(index)}>delete</button>
                <button className="up-btn" onClick={()=>moveUp(index)}>👆</button>
                <button className="down-btn" onClick={()=>moveDown(index)}>👇</button>
                </li>))}
        </ol>
        
        </div>
    );
}