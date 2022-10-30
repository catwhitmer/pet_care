import React from 'react' 

class TogglePet extends React.Component {

    state = {
        toggleOn: false
    }

    handleClick = () => {
        this.setState(prevState => ({
            toggleOn: !prevState.toggleOn
            }))
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}> Toggle Sort: {this.state.toggleOn ? "ON" : "OFF"} </button>
            </div>
        )
    }
}

export default TogglePet