import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchOwners } from '../actions/fetchOwners'
import OwnerForm from '../components/OwnerForm'
import PetForm from '../components/PetForm'
import Owners from '../components/Owners'
import Owner from '../components/Owner'
import Pets from '../components/Pets'
import Home from '../components/Home'
import RenderPetForm from '../components/RenderPetForm'
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
                    <Route path='/owners/:id' render={(routerProps) => <Owner {...routerProps} owners={this.props.owners}/>} />
                    <Route path='/owners' render= {(routerProps) => <Owners {...routerProps} owners={this.props.owners}/>} />
                    <Route path='/owners/:id/pets/' render= {(routerProps) => <Owners {...routerProps} owners={this.props.owners}/>} />
                    <Route path='/owners/new' component={OwnerForm} />
                    <Route path='/owners/:id/pets/new' component={PetForm} />
                    <Route path='/' component={Home} />
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

export default connect(mapStateToProps, { fetchOwners })(OwnersContainer)