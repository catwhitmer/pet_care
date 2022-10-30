import React from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'


class TodosContainer extends React.Component {

    render() {
        return (
            <div>
                <Todos todos={this.props.pet && this.props.pet.todos} pet={this.props.pet} />
                <TodoForm pet={this.props.pet} todos={this.props.pet && this.props.pet.todos} />  
            </div>
        )
    }

}

export default TodosContainer