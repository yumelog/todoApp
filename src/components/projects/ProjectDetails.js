import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import TodoList from '../todos/TodoList'
import CreateTodo from '../todos/CreateTodo'

const ProjectDetails = (props) => {
    const { project, auth, todos } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <div className="container section project-details">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">{project.title}</span>
                                <p>{project.content}</p>
                            </div>
                            <div className="card-action gret lighten-4 grey-text">
                                <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                                <div>{moment(project.createdAt.toDate()).calendar()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <div className="row">
                            <CreateTodo />
                            <TodoList todos={todos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loaging project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state)

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    const todos = state.firestore.ordered.todos;
    return {
        project: project,
        auth: state.firebase.auth,
        todos: todos
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { collection: 'projects' },
        { collection: 'todos', where: ['projectId', '==', props.match.params.id] }
    ])
)(ProjectDetails);
