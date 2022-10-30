import React from 'react'
import { connect } from 'react-redux'
import PetsContainer from'./containers/PetsContainer'

class App extends React.Component {
  
  render(){
    return(
      <div className="App">
        <PetsContainer />
      </div>
    )
  }
}

export default connect()(App)
