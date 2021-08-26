import React from 'react';
import './Person.css';

const Person = ({ name, quote, superlative, photo }) => {
  return (
      <section className='person-card'>
        <img src={photo} alt={name}/>
        <h3>{name}</h3>
        <p className='quote'>"{quote}"</p>
        <p className='superlative'>{superlative}</p>
      </section>
  )
}

export default Person;
