import React from 'react';
import PropTypes from 'prop-types';

const Discipline = props => {
  return(
    <div className='Discipline stateDisplay'>
      <div>Discipline: {props.level}</div>
      <button onClick={props.onScold}>Scold</button>
    </div>
  )
}

Discipline.propTypes ={
  level: PropTypes.number.isRequired,
  onScold: PropTypes.func.isRequired
}

export default Discipline;
