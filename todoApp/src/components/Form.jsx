import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todoList, setTodoList}){
    // const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name: "", status: false});
    
    function handleSubmit(e){
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo({name: "", status: false});
    }

    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.modernInput} 
                    onChange={(e) => setTodo({...todo, name: e.target.value})} 
                    type="text" 
                    value={todo.name}
                    placeholder="Enter todo item"
                />
                <button className={styles.modernButton} type="submit">Add</button>

            </div>
        </form>
    )
}