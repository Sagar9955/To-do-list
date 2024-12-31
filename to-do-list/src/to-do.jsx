import {useState} from 'react';

function Mycomponent(){
    // using usestate
    const [tasks,setTasks]=useState(["Go to market","Buy vegetables","Cook food"]);
    const [newTask,setNewTask]=useState("");

    // function to add task
    function handlechange(e){
        setNewTask(e.target.value);
    }
    
    function addtask(){
        if(newTask.trim() !==""){
            setTasks(t=>[...t,newTask]);
            setNewTask('')
        }
    document.querySelector("#inputdata").value='';
    }
    function deletetask(index){
        setTasks(tasks.filter((ele,i)=>i!==index));
    }
    function moveup(index){
        const swapelement=[...tasks]
        if(index >0){
            [swapelement[index],swapelement[index-1]]=
            [swapelement[index-1],swapelement[index]]
            setTasks(swapelement)
        }
    }
    function movedown(index){
        const swapelement=[...tasks]
        if (index < tasks.length-1){
            [swapelement[index],swapelement[index+1]]=
            [swapelement[index+1],swapelement[index]]
            setTasks(swapelement)
        }
    }
    return(<div className="To-Do-list">
        <h1>To-DO-List</h1>
        <div>
            <input type="text" placeholder="Enter Task" onChange={handlechange} id="inputdata"/>
            <button onClick={addtask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((ele,index) => <li key={index}>
                <span>{ele}</span>
                <button onClick={()=>deletetask(index)}>Delete</button>
                <button onClick={()=>moveup(index)}>Move Up</button>
                <button onClick={()=>movedown(index)}>Move Down</button>
            </li>
    )}
        </ol>
    </div>);
}
export default Mycomponent;