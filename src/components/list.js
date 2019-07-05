import React, { Component } from 'react';

// children component
class Person extends Component{
    render(){
        const p = this.props;
        console.log(p);
        return(
            <div>
                <p>Name : { p.person.name}</p>
                <p>Age : { p.person.age}</p>
                <p>DOB : { p.dob}</p>
            </div>
        )
    }
}

// Parent Component
class List extends Component {
  render() {
      const person ={
          name : 'Sally',
          age  : 21,
          birthDate : ' 2nd Feb 1998 '
      }
      
        return (
            <div className ="list">
                {/*
                 Properties to be assigned in parent component
                */}
                <Person person = {person} dob ={person.birthDate} />
            </div>
        );
    }
}

export default List;