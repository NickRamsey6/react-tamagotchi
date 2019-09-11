import React from 'react';
import PropTypes from 'prop-types';

const Happyness = props => {
  return(
    <div className='Happyness stateDisplay'>
      <div>Happyness: {props.level}</div>
      <button onClick={props.onPlay}>Play</button>
    </div>
  )
}

Happyness.propTypes ={
  level: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired
}

export default Happyness;
