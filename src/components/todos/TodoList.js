import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const TodoList = (props) => {
    console.log('todos');
    console.log(props);
    return (
        <div className="todo-list section">
                    <p>todo</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth,
        projectId: id
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todos', where: ['projectId', 'XXX'] }
    ])
)(TodoList);
