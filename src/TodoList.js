import TodoItem from './TodoItem';

export default function TodoList({todos, toggleTodo}) {
    return (
        todos.map( todo => {
            return (
                <TodoItem  key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            )
        })
    );
}
