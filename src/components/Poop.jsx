import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar'

const Poop = props => {
  return(
    <div className='Poop stateDisplay'>
      <div className='stateLevel'>
        <div>Poop: {props.level}</div>
        <Bar level={props.level} />
      </div>
      <button onClick={props.onClean}>Clean</button>
    </div>
  )
}

Poop.propTypes ={
  level: PropTypes.number.isRequired,
  onClean: PropTypes.func.isRequired
}

export default Poop;
