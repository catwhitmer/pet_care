import React from 'react'
import { connect} from 'react-redux'
import { deleteTodo } from '../actions/deleteTodo'


const Todos = (props) => {

    const handleDelete = (todo) => {
        props.deleteTodo(todo.id, todo.pet_id)
    }

    return (
        <div>
            <h1>To-Dos</h1>
                <h3>
                    {props.todos && props.todos.map(todo => 
                    <li key={todo.id}> {todo.description} - {todo.notes} <br />
                        <button className="button" onClick={() => handleDelete(todo)}>Delete</button>
                    </li>)}
                    
                </h3>
        </div>
    )
}

export default connect(null, {deleteTodo} )(Todos)