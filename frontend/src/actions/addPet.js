export const addPet = (formData) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/pets`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(pet => dispatch({type: 'ADD_PET', payload: pet}))
    }
}