import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/todoActions'
import { Redirect } from 'react-router-dom'

class CreateTodo extends Component {
    state = {
        content: '',
        projectId: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTodo(this.state);
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
console.log(this.props);
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="input-field col s6">
                        <input id="content" type="text" data-length="10" onChange={this.handleChange} />
                        <label htmlFor="input_text">Input text</label>
                    </div>
                    <button className="btn todo-submit waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
