import styles from "./todoItem.module.css"

export default function TodoItem({item, todoList, setTodoList}){

    function handleDelete(item){
        console.log(`Delete item: ${item.name}`);
        setTodoList(todoList.filter((todo)=> todo.name!==item.name));
    }

    function handleClick(name){
        // const newTodoList = todoList.map(
        //     (todo) => todo.name===name ? {...todo, done: !todo.done} : todo
        // )
        // setTodoList(newTodoList)
        setTodoList(
            todoList.map(
                (todo) => todo.name===name ? {...todo, done: !todo.done} : todo
            )
        )
    }

    const isLineThrough = item.done ? styles.completed : ""

    return (
        <div className={styles.item}>
            <div className={styles.itemName}> 
                <span className={isLineThrough} onClick={()=>handleClick(item.name)}>
                    {item.name}
                </span>
                <span>
                    <button className={styles.deleteButton} onClick={()=> (handleDelete(item))}>x</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}