import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import { fetchOwners } from '../actions/fetchOwners'
import OwnerForm from '../components/OwnerForm'
import PetForm from '../components/PetForm'
import TodoForm from '../components/TodoForm'
import Owners from '../components/Owners'
import Owner from '../components/Owner'
import Pets from '../components/Pets'
import Todos from '../components/Todos'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

class OwnersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchOwners()
    }
  
    render() {
        return (
            <div>
            <NavBar />
                <Switch>
                    <Route exact path='/owners/new' component={OwnerForm} />
                    <Route exact path='/owners/:id/pets/new' component={PetForm} />
                    <Route exact path='/owners/:owner_id/pets/:id/todos/new' component={TodoForm} />
                    <Route exact path='/owners/:owner_id/pets/:id/todos' render={(props) => <Todos {...props} owners={this.props.owners}/>}/>
                    <Route exact path='/owners/:id' render={(props) => <Owner {...props} owners={this.props.owners}/>} />
                    <Route exact path='/owners' render= {(props) => <Owners {...props} owners={this.props.owners}/>} />      
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        owners: state.owners
    }
}

export default withRouter (connect(mapStateToProps, { fetchOwners })(OwnersContainer))