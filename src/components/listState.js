import React, { Component } from 'react';
// React State
//State is similar to props, 
//but it is private and fully controlled by the component.
class Liststate extends Component {
    constructor(props){
        super(props)
          this.state={
              name :'Gomez',
              age : 22,
              dob :'10th March 1997'
          }
    }
    render() {
        
        return (
            <div>
                <p>Name : { this.state.name}</p>
                <p>Age : { this.state.age}</p>
                <p>DOB : { this.state.dob}</p>
                
            </div>
        );
    }
}

export default Liststate;