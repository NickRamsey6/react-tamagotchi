import React from 'react';
import PropTypes from 'prop-types';

const Poop = props => {
  return(
    <div className='Poop stateDisplay'>
      <div>Poop: {props.level}</div>
      <button onClick={props.onClean}>Clean</button>
    </div>
  )
}

Poop.propTypes ={
  level: PropTypes.number.isRequired,
  onClean: PropTypes.func.isRequired
}

export default Poop;
