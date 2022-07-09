
import React from "react";
export default function ToDO(){

const [data,setData]=React.useState("")
const [tasks,setTask]=React.useState([])

function AddTask()
{
    
setTask([...tasks,data])
setData('')

}

function DeleteTask(x){
   let copiedTask=[...tasks]
    copiedTask.splice(x,1)
    setTask(copiedTask)

}
function handleInput(event){

   
   setData(event.target.value)

console.log(event.target)
    
    
    
        
    }
return(
<>
<input
placeholder="Add task"
value={data}
onChange={handleInput}
name="task"

/>
<button onClick={AddTask}>AddTask</button>

{

tasks.length?(tasks.map((item,index)=>(
    <p key={index} >
        
        {item}
        <button onClick={()=>DeleteTask(index)}>delete</button>

    </p>
 )) ):<p>You dont have any tasks</p>
}


</>

)


}
