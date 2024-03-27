import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";

export default function TodoList({ todoList, setTodoList}){
    return (
        <div className={styles.list}>
            {
                todoList.map(
                    (item) => (
                        <TodoItem key={item.name} item={item} todoList={todoList} setTodoList={setTodoList}/>
                    )
                )
            }
        </div>
    )
}