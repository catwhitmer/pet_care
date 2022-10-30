export const deletePet = (petId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/pets/${petId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(pet => dispatch({type: 'DELETE_PET', payload: pet}))
    }
}
