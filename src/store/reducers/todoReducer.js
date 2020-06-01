const initState = {
    todos: [
        {content: 'help me find peach', projectId: 'blah blah blah'},
        {content: 'collect all the stars', projectId: 'blah blah blah'},
        {content: 'egg hunt with yoshi', projectId: 'blah blah blah'},
    ]
}
const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            console.log('created todo', action.todo);
            return state;
        case 'CREATE_TODO_ERROR':
            console.log('create todo error', action.err);
            return state;        
        default: 
            return state;
    }
}

export default todoReducer