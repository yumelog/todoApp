import React from 'react'
import TodoSummary from './TodoSummary'

const TodoList = ({todos}) => {
    console.log(todos);
    return (
        <div className="todo-list section">
            { todos && todos.map(todo => {
                return (
                        <TodoSummary todo={todo} />
                )
            })}
        </div>
    )
}

export default TodoList;
