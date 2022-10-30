export const deleteTodo = (todoId, petId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/pets/${petId}/todos/${todoId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(pet => dispatch({type: 'DELETE_TODO', payload: pet}))
    }
}
