import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
    const [todoList, setTodoList] = useState([]);

    return (
        <div>
            <Form todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
}