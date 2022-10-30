import React from 'react' 
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo'

class TodoForm extends React.Component {

    state = {
        description: '',
        notes: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state, this.props.pet.id)
        this.setState({
            description: '',
            notes: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Add a New To-Do</h1>
                    <h3>
                        <label>description</label>
                        <input type='text' name='description' value={this.state.description} onChange={this.handleOnChange} /><br />
                        <label>notes</label>
                        <input type='text' name='notes' value={this.state.notes} onChange={this.handleOnChange} /><br />
                        <input type='submit'/>
                    </h3>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo }) (TodoForm)