import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE

const Cohort = ({ staff, students }) => {
  let staffPeople = staff.map(person => {
    return <Person
              key={person.id}
              id={person.id}
              name={person.name}
              quote={person.quote}
              superlative={person.superlative}
              photo={person.photo}
            />
        });

  let studentPeople = students.map(person => {
    return <Person
              key={person.id}
              id={person.id}
              name={person.name}
              quote={person.quote}
              superlative={person.superlative}
              photo={person.photo}
              />
        });

  return (
    <main className='cohort-container'>
      {staffPeople}
      {studentPeople}
    </main>
  )
}

export default Cohort;
