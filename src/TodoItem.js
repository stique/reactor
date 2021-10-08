export default function TodoItem({todo, toggleTodo}) {
    const handleChange = () => {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <input type="checkbox" id={`todo${todo.id}`} checked={todo.complete} onChange={handleChange}/>
            <label htmlFor={`todo${todo.id}`}>{todo.name}</label>
        </div>
    )
}
