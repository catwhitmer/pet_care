export const addTodo = (todo, petId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/pets/${petId}/todos`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(todo)
        })
        .then(resp => resp.json())
        .then(pet => dispatch({type: 'ADD_TODO', payload: pet}))
    }
}