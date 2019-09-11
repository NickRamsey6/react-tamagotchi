import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Discipline = props => {
  return(
    <div className='Discipline stateDisplay'>
    <div className='stateLevel'>
      <div>Discipline: {props.level}</div>
      <Bar level={props.level} />
    </div>
      <button onClick={props.onScold}>Scold</button>
    </div>
  )
}

Discipline.propTypes ={
  level: PropTypes.number.isRequired,
  onScold: PropTypes.func.isRequired
}

export default Discipline;
