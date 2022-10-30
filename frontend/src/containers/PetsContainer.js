import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import { fetchPets } from '../actions/fetchPets'
import PetForm from '../components/PetForm'
import TodoForm from '../components/TodoForm'
import Pets from '../components/Pets'
import Pet from '../components/Pet'
import Todos from '../components/Todos'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

class PetsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPets()
    }
  
    render() {
        return (
            <div>
            <NavBar />
                <Switch>
                    <Route exact path='/pets/new' component={PetForm} />
                    <Route exact path='/pets/:id/todos/new' component={TodoForm} />
                    <Route exact path='/pets/:id/todos' render={(props) => <Todos {...props} pets={this.props.pets}/>}/>
                    <Route exact path='/pets/:id' render={(props) => <Pet {...props} pets={this.props.pets}/>} />
                    <Route exact path='/pets' render= {(props) => <Pets {...props} pets={this.props.pets}/>} />      
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        pets: state.pets
    }
}

export default withRouter (connect(mapStateToProps, { fetchPets })(PetsContainer))