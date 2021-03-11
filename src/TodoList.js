import React,{useState} from "react"
import {useSelector,useDispatch} from "react-redux"

const TodoList=({add, del})=>{
    const INITIAL_STATE={
        text:""
    }
    const [formData,setFormData]=useState(INITIAL_STATE)
    const {todos}=useSelector(store=>store)
    const dispatch=useDispatch();
    const handleChange=e=>{
        const {name,value}=e.target;
        console.log(e.target)
        setFormData(formData=>({
            ...formData,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        add({...formData})
        // dispatch({type:"ADD_TODO",payload:{text:formData.text,status:false}})
        setFormData(INITIAL_STATE)
    }
    const handleDelete=e=>{
        e.preventDefault();
        del(e.target.id)
    }
    return (
        <div>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>{todo.text}
                    <button id={todo.id} onClick={handleDelete}>X</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTodo">Enter new Task</label>
                <input 
                    type="text"
                    name="text"
                    placeholder="Enter new task"
                    value={formData.text}
                    onChange={handleChange}/>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
export default TodoList;