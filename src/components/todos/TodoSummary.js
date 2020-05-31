import React from 'react'

const TodoSummary = ({todo}) => {
    console.log(todo);
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{todo.content}</span>
            </div>
        </div>
    )
}

export default TodoSummary;
