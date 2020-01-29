import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState(
 {   persons: [
      {name: 'Max', age: 22},
      {name: 'Manu', age: 42},
      {name: 'cierra', age: 27},
    ],
    showPersons: false,
  });
 
  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState.showPersons);
  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
     
    });
  };
  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Max', age: 22},
        {name: 'Manu', age: 42},
        {name: 'cierra', age: 27},
      ], 
    })
  }
  const togglePersonHandler = () => {
   // alert('test');
   var d = personsState.showPersons;
  //setpersonsState({showPersons: !d});
  setPersonsState({
    persons: [
      {name: 'Max', age: 22},
      {name: 'Manu', age: 42},
      {name: 'cierra', age: 27},
    ],
    showPersons: !d,
  })

  }
 
  const style = {
    backgroundColor: '#008CBA',
   
    font: 'inherit',
    
    padding: '8px',
    cursor: 'pointer'
  }
  
   return (
    <div className="App">
      <h1>Hi,I'm a React app</h1>
      <p>This is really working!!</p>
      <button 
      style = {style}
      onClick={togglePersonHandler}>Switch Name</button>
      { (personsState.showPersons)  ?
        <div>
      <Person
       name={personsState.persons[0].name} 
       age={personsState.persons[0].age} 
      // changed={nameChangedHandler}
       />
      <Person
       name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      changed={nameChangedHandler}
      click={switchNameHandler.bind(this, 'Maximnad')}
      changed={nameChangedHandler}
      >
       
        I am a racer
       </Person>
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age} />
      </div> : null
      }
    </div>
    
    ); 
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this worlk now'))
  //}
}
export default App;
