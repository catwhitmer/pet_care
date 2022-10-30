export function fetchPets() {
   return (dispatch) => {
    fetch('http://localhost:3001/api/v1/pets')
    .then(resp => resp.json())
    .then(pets => dispatch({
        type: 'FETCH_PETS',
        payload: pets
    }))
   }
}