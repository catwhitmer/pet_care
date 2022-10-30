import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Like from '../components/Like'
import TogglePet from '../components/TogglePet'


const Pets = (props) => {

    const [
        toggleOn,
        setToggleOn //setState
    ] = useState(false) //call setToggleOn(!toggleOn)

    const handleClick = () => {
        setToggleOn(!toggleOn)
    }

    const displayPets = () => {  //return original or sorted, false = unsorted, true = sorted , props.pets = array of objects
        if (toggleOn){ 
            let sortedPets = props.pets
            let newPets = sortedPets.slice().sort((a,b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
            return newPets
        } else {
            return props.pets
        }
    }

    return (
        <div>
            <div className='pets'></div>
                <h1>My Pets!</h1>
                <h3>Sort your Pets alphabetically!</h3>
                    <button onClick={handleClick}> Toggle Sort: {toggleOn ? "ON" : "OFF"} </button>
                        <br></br>
                        {displayPets().map(pet => 
                            <h2 key={pet.id}>
                                <Link to={`/pets/${pet.id}`}> {pet.name} </Link>
                                <Like />
                            </h2>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pets: state.pets
    }
}


export default connect(mapStateToProps) (Pets)