import React from 'react'
import { connect } from 'react-redux'
import { deletePet } from '../actions/deletePet'
import { withRouter } from 'react-router-dom'

import TodosContainer from '../containers/TodosContainer'


const Pet = (props) => {

  const handleDelete = (pet) => {
      props.deletePet(pet.id)
      props.history.push('/pets')
  }


  let pet = props.pets && props.pets.filter(pet => pet.id == props.match.params.id)[0]

    return (
      <div>
        <h1>{pet ? pet.name : null}'s Page</h1>
          <h2>
            Species: {pet ? pet.species : null}<br />
            Breed: {pet ? pet.breed : null}<br />
            Age: {pet ? pet.age : null}<br />
            <button className="button" onClick={() => handleDelete(pet)}>Delete</button>
          </h2>
        <hr />
        <TodosContainer pet={pet}/>
      </div>
    )
}


export default withRouter(connect(null, {deletePet})(Pet))