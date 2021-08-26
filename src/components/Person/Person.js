import React from 'react';
import './Person.css';

const Person = ({ name, quote, superlative, photo }) => {
  return (
    <section>
      <img src={photo} alt={name}/>
      <h3>{name}</h3>
      <i>"{quote}"</i>
      <p>{superlative}</p>
    </section>
  )
}

export default Person;
