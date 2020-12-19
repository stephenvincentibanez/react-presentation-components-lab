// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    state ={
        mood: true
    }

    toggleMood = () => {
        this.setState((prevState)=>{
            return{
                mood: !prevState.mood
            }
        })
      }

    render() {
        return (
            <div onClick={this.toggleMood}>
                {this.state.mood === true? "Happy" : "Sad"}
            </div>
        );
    }
}

export default SimpleComponent;
